import { useAccount } from "wagmi";
import Navbar from "../components/Navbar";
import Form from "../components/Upload/Form";

const Upload = () => {
    const { address } = useAccount();

    return (
        <div>
            <div className="font-jetbrains" >
                <Navbar />
                {address && <Form />}
            </div>
        </div>
    );
}
export default Upload;