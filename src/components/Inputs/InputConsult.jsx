import React from 'react';
import { BsRssFill } from 'react-icons/bs'
import { InputStyleConsult } from './style/inputStyleConsult';

const ConsultInput = ({
    label,
    $isLarge,
    value,
    openModal,
    title
}) => {

    return (
        <InputStyleConsult $isLarge={$isLarge}
            onClick={openModal}
        >
            <label htmlFor={label} >
                {label + ':'}
            </label>
            <span>
                {value || '...'}
            </span>

            <button
                onClick={openModal}
                type='button'
                title={title || 'Consultar Api'}
            >
                <BsRssFill />
            </button>
        </InputStyleConsult>
    );
}

export default ConsultInput;
