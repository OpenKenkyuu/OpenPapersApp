import Navbar from "../components/Navbar";

import { useAccount } from "wagmi";
import SignInLens from "../components/Profile/SignInLens";

const Profile = () => {
    const { address } = useAccount();

    return (
        <div className="font-jetbrains">
            <Navbar />
            {address && < div className="font-jetbrains" >
                <div className="flex justify-center items-center">
                    <div className="bg-gray-200 rounded px-8 py-4">
                        <p className="text-2xl font-bold text-gray-800 mb-4">Profile</p>
                        <p className="text-gray-800 mb-4">🚧 This page is under construction. 🚧</p>
                    </div>
                </div>
            </div>}
        </div>
        // <SignInLens />
    );
};

export default Profile;