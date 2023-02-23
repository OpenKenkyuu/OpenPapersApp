import { useAccount } from "wagmi";
import Navbar from "../components/Navbar";
import DragAndDrop from "../components/Upload/DragAndDrop";
import Form from "../components/Upload/Form";

const Upload = () => {
    const { address } = useAccount();

    return (
        <div>
            <div className="font-jetbrains" >
                <Navbar />
                {address && <div className="flex">
                    <DragAndDrop />
                    <Form />
                </div>}
            </div>
        </div>
    );
}
export default Upload;