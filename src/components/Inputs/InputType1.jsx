import React from 'react';
import { InputStyle1 } from './style/InputStyle1';

const BasicInput = ({
    label,
    $isLarge,
    onChange,
    value
}) => {

    return (
        <InputStyle1 $isLarge={$isLarge} >
            <label htmlFor={label} >{label + ':'}</label>
            <input id={label}
                onChange={onChange} value={value} />
        </InputStyle1>
    );
}

export default BasicInput;
