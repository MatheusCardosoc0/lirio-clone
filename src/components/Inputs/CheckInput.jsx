import React from 'react';
import { CheckInputStyle } from './style/CheckInputStyle';
import { BsCheckLg, BsFillCircleFill } from 'react-icons/bs'

const CheckInput = ({
    options = [],
    setData,
    data
}) => {

    return (
        <CheckInputStyle>
            {options.map((option) => (
                <div>
                    <label>{option.title}</label>
                    <span
                        onClick={() => setData(option.value)}
                    >
                        {data === option.value && (
                            <BsCheckLg />
                        )}
                        {data !== option.value && (
                            <BsFillCircleFill />
                        )}
                    </span>
                </div>
            ))}
        </CheckInputStyle>
    );
}

export default CheckInput;
