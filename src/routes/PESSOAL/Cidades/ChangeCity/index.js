import React from 'react';
import { useParams } from 'react-router-dom';
import BasedFormCity from '../BasedFormCity';

const ChangeCity = () => {

    const { id } = useParams()

    return (
        <BasedFormCity
            id={id}
        />
    )
}

export default ChangeCity;
