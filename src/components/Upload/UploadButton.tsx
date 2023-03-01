type Props = {
    formData: {
        title: string;
        author: string[];
        category: string[];
        price: number;
        pdf?: File;
    };
};

const UploadButton = ({ formData }: Props) => {
    const handleClick = () => {
        const { title, author, category, price, pdf } = formData;

        const data = {
            title,
            author,
            category,
            price,
            pdfName: pdf?.name,
        };

        console.log(JSON.stringify(data));
    };

    return (
        <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={handleClick}
        >
            Publish
        </button>
    );
};

export default UploadButton;
