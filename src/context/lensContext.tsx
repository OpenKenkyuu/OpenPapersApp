import { useState, createContext, useContext, useEffect } from "react";
import { challenge, apolloClient, authenticate, getDefaultProfile } from "../LensApi";

import { useAccount, useSignMessage } from "wagmi";

export const LensContext = createContext({});

export const useLensContext = () => {
    return useContext(LensContext);
};

export function LensProvider({ children }) {
    const [profileId, setProfileId] = useState();
    const [token, setToken] = useState();
    const { address } = useAccount();
    const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage()

    const signIn = async function () {
        try {
            const challengeInfo = await apolloClient.query({
                query: challenge,
                variables: {
                    address: address,
                },
            });
            signMessage(challengeInfo.data.challenge.text);
            const authData = await apolloClient.mutate({
                mutation: authenticate,
                variables: {
                    address: address,
                    signature: data,
                },
            });

            const {
                data: {
                    authenticate: { accessToken },
                },
            } = authData;
            setToken(accessToken);

        } catch (error) {
            console.log("Error signing in", error);
        }
    }

    const getProfileId = async function () {
        const defaultProfile = await apolloClient.query({
            query: getDefaultProfile,
            variables: {
                request: {
                    ethereumAddress: address,
                },
            },

        });

        if (defaultProfile.data.defaultProfile) {
            return defaultProfile.data.defaultProfile;
        }
        else {
            return null;
        }
    }


    useEffect(() => {
        const readToken = window.localStorage.getItem("lensToken");
        if (readToken) {
            setToken(readToken);
        }
        if (address && !token && !readToken) {
            signIn();
        }
        if (!address) {
            window.localStorage.removeItem("lensToken");
        }
        if (address) {
            getProfileId().then((id) => setProfileId(id));
        }
    }, [address]);

    useEffect(() => {
        if (token) {
            window.localStorage.setItem("lensToken", token);
        }
    }, [token]);

    return (
        <LensContext.Provider value={{ profileId, token }}>
            {children}
        </LensContext.Provider>
    );
}