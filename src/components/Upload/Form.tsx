import { empty } from "@apollo/client";
import { useState } from "react";
import DragAndDrop from "./DragAndDrop";
import UploadButton from "./UploadButton";

const Form = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: [] as string[],
        category: [] as string[],
        price: 0
    });

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFormData((prevState) => ({ ...prevState, author: value.split(",") }));
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFormData((prevState) => ({ ...prevState, category: value.split(",") }));
    };

    const handlePDFChange = (pdf: File) => {
        setFormData((prevState) => ({ ...prevState, pdf }));
    };

    return (
        <div className="flex flex-row">
            <DragAndDrop />
            <div className="h-full w-1/2 p-5">
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="author">
                        Author
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="author"
                        name="author"
                        type="text"
                        value={formData.author}
                        onChange={handleAuthorChange}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
                        Category
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        name="category"
                        type="text"
                        value={formData.category}
                        onChange={handleCategoryChange}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
                        Paper Price
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        name="price"
                        type="number"
                        placeholder="0 MATIC"
                        value={formData.price}
                        onChange={handleFormChange}
                    />
                </div>
                <UploadButton formData={formData} />
            </div>
        </div>
    );
};

export default Form;
