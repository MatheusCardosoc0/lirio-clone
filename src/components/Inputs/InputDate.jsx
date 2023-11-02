import React from 'react';
import { BasicInputStyle } from './style/BasicInputStyle';

const InputDate = ({
    label,
    $isLarge,
    setDate,
    value,
    object
}) => {

    const handleChange = (value) => {

        value = value.replace(/[^\d]/g, '');

        if (value.length >= 3 && value.length <= 4)
            value = `${value.slice(0, 2)}/${value.slice(2)}`;
        else if (value.length > 4)
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;

        value = value.slice(0, 10);

        console.log(value)

        if (object) {
            setDate({ ...object, birthDate: value });
        } else {
            setDate(value);
        }
    };

    return (
        <BasicInputStyle $isLarge={$isLarge} >
            <label htmlFor={label} >{label + ':'}</label>
            <input
                id={label}
                type=''
                onChange={e => handleChange(e.target.value)}
                placeholder='dd/mm/yyyy'
                value={value}
            />
        </BasicInputStyle>
    );
}

export default InputDate;
