// core
import * as React from 'react';

interface ITextboxProps {
    label?: string;
    name: string;
    type: string;
    value: string;
    focus?: boolean;
    placeholder?: string;
    error?: string;
    onChange?: (event: any) => void;
}

const TextBoxComponent = (props: ITextboxProps) => {
    return (
        <div>
            <label className='input-label'>{props.label}</label>
            <label className='alert-danger'>{props.error}</label>
            <input
                className='input-field'
                name={props.name}
                type={props.type}
                value={props.value}
                autoFocus={props.focus}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default TextBoxComponent;
