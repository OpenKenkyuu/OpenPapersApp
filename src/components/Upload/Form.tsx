import { useState } from "react";
import UploadButton from "./UploadButton";

const Form = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="h-full w-1/2 p-5">
            <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                    Title
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                />
            </div>
            <div className="mb-5">
                <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="author"
                >
                    Author
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="author"
                    type="text"
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
                    Category
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    type="text"
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
                    Paper Price
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="price"
                    type="number"
                />
            </div>
            <UploadButton />
        </div>
    );
};
export default Form;