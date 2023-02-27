import { useEffect, useState } from 'react'
import { client, challenge, authenticate } from '../../api'
import { useAccount, useProvider, useSigner, useSignMessage } from 'wagmi'

export default function SignInLens() {
    /* local state variables to hold user's address and access token */
    const { address } = useAccount();
    const provider = useProvider();
    const [token, setToken] = useState()
    useEffect(() => {
        /* when the app loads, check to see if the user has already connected their wallet */
        checkConnection()
    }, [])
    async function checkConnection() {
        if (address && provider) {
            return true
        }
    }

    /* this allows the user to connect their wallet */
    async function login() {
        try {
            /* first request the challenge from the API server */
            const challengeInfo = await client.query({
                query: challenge,
                variables: { address }
            })
            /* ask the user to sign a message with the challenge info returned from the server */
            const { data, isSuccess, signMessage } = useSignMessage({
                message: challengeInfo.data.challenge.text,
            })
            /* authenticate the user */
            const authData = await client.mutate({
                mutation: authenticate,
                variables: {
                    address, signMessage
                }
            })
            /* if user authentication is successful, you will receive an accessToken and refreshToken */
            const { data: { authenticate: { accessToken } } } = authData
            console.log({ accessToken })
            setToken(accessToken)
        } catch (err) {
            console.log('Error signing in: ', err)
        }
    }

    return (
        <div>
            { /* if the user has connected their wallet but has not yet authenticated, show them a login button */}
            {
                address && !token && (
                    <div onClick={login}>
                        <button>Login</button>
                    </div>
                )
            }
            { /* once the user has authenticated, show them a success message */}
            {
                address && token && <h2>Successfully signed in!</h2>
            }
        </div>
    )
}