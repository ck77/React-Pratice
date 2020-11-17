import React, { useState, useContext } from "react"
import { InputError, InputSetting } from './InputSetting'
import { FormContext } from './FormContext'
import { ValidateInput } from './InputUtils'

const Textbox: React.FC<InputSetting> = ({ Id, Title, Name, PlaceHolder, ValidateOption }) => {

    const [inputError, setInputError] = useState(new InputError);

    const { FormValue, UpdateValue } = useContext(FormContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const validateResult = ValidateInput(e.target.value, ValidateOption);
        if (!validateResult.IsError()) {
            UpdateValue(Name, e.target.value);
        }

        setInputError(validateResult);
    }

    const RenderErrorMessage = () => {
        return inputError.IsError() ? <span className='form-error-message'>{getErrorMessage()}</span> : null;
    }

    const getErrorMessage = () => {
        let message = '';

        if (inputError.IsError()) {
            if (inputError.RequiredError) {
                message = ValidateOption?.RequiredMessage || ''
            } else if (inputError.LengthError) {
                message = ValidateOption?.RequiredMessage || ''
            }
        }

        return message;
    }

    return (
        <div>
            <label htmlFor={Id}>{Title}</label>
            <input
                id={Id}
                name={Name}
                className={`form-text ${inputError.IsError() ? 'is-error' : ''}`}
                placeholder={PlaceHolder}
                maxLength={ValidateOption?.MaxLength}
                value={FormValue[Name]}
                onChange={handleChange} />
            {RenderErrorMessage()}
        </div>
    )
}

export default Textbox;