import { ValidateOption, InputError } from './InputSetting'

export const ValidateInput = (value: string, option: ValidateOption): InputError => {
    const error = new InputError();

    if (!option) {
        return error;
    }

    const v = value?.trim() || '';

    if (option.Required && v === '') {
        error.RequiredError = true;
    }

    if (option.MaxLength && option.MaxLength < v.length) {
        error.LengthError = true;
    }

    return error;
}