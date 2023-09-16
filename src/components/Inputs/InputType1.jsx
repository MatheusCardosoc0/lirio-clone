import React from 'react';
import { InputStyle1 } from './style/InputStyle1';

const BasicInput = ({
    label,
    $isLarge,
    onChange,
    value,
    type
}) => {

    return (
        <InputStyle1 $isLarge={$isLarge} >
            <label htmlFor={label} >{label + ':'}</label>
            <input
                id={label}
                onChange={onChange}
                value={value}
                type={type}
            />
        </InputStyle1>
    );
}

export default BasicInput;
