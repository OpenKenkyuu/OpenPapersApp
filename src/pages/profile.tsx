import { useAccount } from "wagmi";
import ActiveLensProfile from "../components/Profile/ActiveLensProfile";

import LensLogin from "../components/Profile/LensLogin";

const Profile = () => {
    const { address } = useAccount();

    return (
        <div className="font-jetbrains">
            {address && < div className="flex flex-col justify-center items-center" >
                <div className="mt-4">
                    <LensLogin />
                </div>
            </div >}
        </div>
    );
};

export default Profile;