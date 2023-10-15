import React from 'react';
import BasedFormPerson from '../BasedFormPerson';
import { useParams } from 'react-router-dom';

const ChangePerson = () => {
    const { id } = useParams()

    return (
        <BasedFormPerson
            id={id}
        />
    );
}

export default ChangePerson;
