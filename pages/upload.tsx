import { useIsMounted } from "../hooks/useIsMounted";
import { useAccount } from "wagmi";
import Navbar from "../components/Navbar";
import DragAndDrop from "../components/Upload/DragAndDrop";
import Form from "../components/Upload/Form";

const Upload = () => {
    return (
        <div>
            <div className="font-jetbrains" >
                <Navbar />
                <div className="flex">
                    <DragAndDrop />
                    <Form />
                </div>
            </div>
        </div>
    );
}
export default Upload;