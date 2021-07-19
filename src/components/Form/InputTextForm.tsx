import React, { ChangeEventHandler } from 'react';

const InputTextForm: React.FC<{ handleChange: ChangeEventHandler, label: string, value: string }> = ({ handleChange, label, value }) =>{
    return(
        <div className="form__input">
            <label>
                { label }
            </label>
            <input 
            onChange={handleChange}
                className=""
                type="text"
                placeholder = ""
                value = { value }  
            />
        </div>
    );
}

export default InputTextForm;