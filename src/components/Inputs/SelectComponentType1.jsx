import React from 'react';
import { BsRssFill } from 'react-icons/bs'
import { SelectStyle1 } from './style/SelectStyle1';

const BasicSelect = ({
    label,
    $isLarge,
    onChange,
    value,
    options = []
}) => {

    return (
        <SelectStyle1 $isLarge={$isLarge} >
            <label htmlFor={label} >{label + ':'}</label>
            <select id={label}
                onChange={onChange} value={value}>
                <option value={"Nenhum"} >
                    Nenhum
                </option>
                {options.map((item, index) => (
                    <option key={index} value={item.name} >
                        {item.name}
                    </option>
                ))}
            </select>
        </SelectStyle1>
    );
}

export default BasicSelect;
