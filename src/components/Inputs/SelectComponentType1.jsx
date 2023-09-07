import React from 'react';
import { BsRssFill } from 'react-icons/bs'
import { SelectStyle1 } from './style/SelectStyle1';

const BasicSelect = ({
    label,
    $isLarge,
    onChange,
    value,
    openModal
}) => {

    return (
        <SelectStyle1 $isLarge={$isLarge} >
            <label htmlFor={label} >{label + ':'}</label>
            <select id={label}
                onChange={onChange} value={value} />

            <button onClick={openModal} >
                <BsRssFill />
            </button>
        </SelectStyle1>
    );
}

export default BasicSelect;
