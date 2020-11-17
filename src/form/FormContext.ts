import { createContext } from "react"

export interface IFormContext {
    FormValue: { [key: string]: string };
    UpdateValue: (name: string, value: string) => void;
    ValidateForm: () => void;
}

export const FormContext = createContext<IFormContext>({
    FormValue: {},
    UpdateValue: () => { },
    ValidateForm: () => { }
});

