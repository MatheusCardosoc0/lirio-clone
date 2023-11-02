import React from 'react';
import { BasicInputStyle } from './style/BasicInputStyle';

const BasicInput = ({
    label,
    $isLarge,
    onChange,
    value,
    type
}) => {

    return (
        <BasicInputStyle $isLarge={$isLarge} >
            <label htmlFor={label} >{label + ':'}</label>
            <input
                id={label}
                onChange={onChange}
                value={value}
                type={type}
            />
        </BasicInputStyle>
    );
}

export default BasicInput;
