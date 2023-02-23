import Link from "next/link";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-center pb-10">
            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center py-10">
                    <ConnectButton />
                </div>
                <div className="bg-gray-200 rounded px-8 py-4">
                    <Link href="/upload"
                        className="relative font-medium text-gray-800 rounded px-3 py-1 mr-10 cursor-pointer hover:bg-indigo-300 transition duration-300 ease-in-out"
                    >
                        Upload
                    </Link>
                    <Link href="/profile"
                        className="relative font-medium text-gray-800 rounded px-3 py-1 mr-10 cursor-pointer hover:bg-indigo-300 transition duration-300 ease-in-out">
                        Profile
                    </Link>
                    <Link href="/read"
                        className="relative font-medium text-gray-800 rounded px-3 py-1 cursor-pointer hover:bg-indigo-300 transition duration-300 ease-in-out"
                    >
                        Read
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
