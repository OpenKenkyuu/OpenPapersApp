import { useAccount } from "wagmi";
import { useActiveProfile } from '@lens-protocol/react';

import LensLogin from "../components/Profile/LensLogin";

const Profile = () => {
    const { address } = useAccount();
    const { data, error, loading } = useActiveProfile();

    return (
        <div className="font-jetbrains">
            {address && < div className="flex flex-col justify-center items-center" >
                <div className="mt-4">
                    <LensLogin />
                </div>
            </div >} : {
                loading && <div>Loading...</div>
            } : {
                error && <div>Error: {error.message}</div>
            } : {
                data && <div>Welcome @ {data.handle}</div>
            }
        </div>
    );
};

export default Profile;