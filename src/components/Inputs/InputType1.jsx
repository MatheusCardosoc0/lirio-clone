import React from 'react';
import { InputStyle1 } from './style/InputStyle1';

const BasicInput = ({
    label,
    max
}) => {

    return (
        <InputStyle1 max={max} >
            <label htmlFor={label} >{label + ':'}</label>
            <input id={label} />
        </InputStyle1>
    );
}

export default BasicInput;
