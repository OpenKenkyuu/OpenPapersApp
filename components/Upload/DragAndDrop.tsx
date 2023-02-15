import { ChangeEvent, DragEvent, useState } from "react";

const DragAndDrop = () => {
    const [pdf, setPdf] = useState<File | null>(null);

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setPdf(e.target.files![0]);
    };

    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const pdf = e.dataTransfer.files[0];
        setPdf(pdf);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const pdf = e.dataTransfer.files[0];
        setPdf(pdf);
    };

    return (
        <div className="w-1/2 mx-4 border border-2 border-indigo-300 border-dashed relative rounded">
            {pdf ? (
                <div className="p-5">
                    <p className="font-bold">{pdf.name}</p>
                </div>
            ) : (
                <div className="flex flex-col items-center h-full" onDragOver={handleDrag} onDrop={handleDrop}>
                    <div className="p-5 text-center">
                        <p className="text-gray-500">Drop your PDF here</p>
                    </div>
                    <div>
                        <input
                            type="file"
                            className="bg-white p-3 w-full"
                            onChange={handleFileSelect}
                            accept="application/pdf"
                        />
                    </div>
                </div>
            )}

        </div>
    );
};

export default DragAndDrop;