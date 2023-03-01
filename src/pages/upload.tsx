import { NextPage } from "next";
import { useAccount } from "wagmi";

import Navbar from "../components/Navbar";
import Form from "../components/Upload/Form";

const Upload: NextPage = () => {
    const { address } = useAccount();

    return (
        <div className="font-jetbrains" >
            {address && <Form />}
        </div>
    );
}
export default Upload;