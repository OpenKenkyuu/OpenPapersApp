import { createContext, ReactNode, useState } from "react";

export interface OpenPaperFormControl {
    title: string;
    authors: string[];
    categories: string[];
    price: number;
}

interface handleSetDataParameters {
    (key: keyof OpenPaperFormControl, value: string | string[] | number): void;
}

interface ContextType {
    OpenPaper: OpenPaperFormControl;
    handleSetData: handleSetDataParameters;
    formError: string | undefined;
    validateFormData: () => boolean;
}

interface Props {
    children: ReactNode;
}

export const PublishContext = createContext<ContextType | undefined>(undefined);

export function PublishContextProvider(props: Props) {
    const [OpenPaper, setOpenPaper] = useState<OpenPaperFormControl>({
        title: "",
        authors: [],
        categories: [],
        price: 0,
    });

    const [formError, setFormError] = useState<string | undefined>(undefined);

    const handleSetData = (key: keyof OpenPaperFormControl, value: string | string[] | number) => {
        setOpenPaper((prevState) => ({ ...prevState, [key]: value }));
    };

    const validateFormData = (): boolean => {
        const { title, authors, categories, price } = OpenPaper;

        if (!title) {
            setFormError("Title is required");
            return false;
        }

        if (!authors.length) {
            setFormError("Author is required");
            return false;
        }

        if (!categories.length) {
            setFormError("Category is required");
            return false;
        }

        if (price <= 0) {
            setFormError("Price must be greater than 0");
            return false;
        }

        setFormError(undefined);
        return true;
    };

    return (
        <PublishContext.Provider value={{ OpenPaper, handleSetData, formError, validateFormData }}>
            {props.children}
        </PublishContext.Provider>
    );
}