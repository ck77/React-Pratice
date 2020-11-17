export enum InputType {
    Textbox
}

export enum ValidateType {
    None,
    Number
}

export interface ValidateOption {
    Required?: boolean;
    RequiredMessage?: string;
    MaxLength?: number;
    MaxLengthMessage?: string;
    ValidateType?: ValidateType;
}

export interface InputSetting {
    Id: string;
    Title: string;
    Name: string;
    Type: InputType;
    PlaceHolder?: string;
    ValidateOption: ValidateOption;
}

export class InputError {
    RequiredError?: boolean;
    LengthError?: boolean;

    IsError = () => this.RequiredError || this.LengthError;
}