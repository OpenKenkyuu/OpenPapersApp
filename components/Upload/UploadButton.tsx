import React from "react";
import { useAccount } from "wagmi";
import { useIsMounted } from "../../hooks/useIsMounted";

const UploadButton = () => {
    const mounted = useIsMounted();
    const { address } = useAccount();

    const handleClick = () => {
        alert("Uploaded");
    };

    return (
        <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={handleClick}
        >
            Upload
        </button>
    );
};

export default UploadButton;
