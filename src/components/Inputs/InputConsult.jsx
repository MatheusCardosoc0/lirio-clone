import React from 'react';
import { BsRssFill } from 'react-icons/bs'
import { InputStyleConsult } from './style/inputStyleConsult';
import { InputStyle1 } from './style/InputStyle1'

const ConsultInput = ({
    label,
    $isLarge,
    onChange,
    value,
    openModal
}) => {

    return (
        <InputStyleConsult $isLarge={$isLarge} >
            <label htmlFor={label} >{label + ':'}</label>
            <input id={label}
                onChange={onChange} value={value} />

            <button onClick={openModal} type='button' >
                <BsRssFill />
            </button>
        </InputStyleConsult>
    );
}

export default ConsultInput;
