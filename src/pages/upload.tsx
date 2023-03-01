import { NextPage } from "next";
import { useAccount } from "wagmi";

import Navbar from "../components/Navbar";
import Form from "../components/Upload/Form";

import { PublishContext } from "../components/Upload/context/publishContext";

const Upload: NextPage = () => {
    const { address } = useAccount();

    return (
        <div>
            <div className="font-jetbrains" >
                <Navbar />
                {address &&
                    <PublishContext>
                        <Form />
                    </PublishContext>
                }
            </div>
        </div>
    );
}
export default Upload;