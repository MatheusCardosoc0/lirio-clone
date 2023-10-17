import React from 'react';
import { BasedFormGroup } from '../BasedFormGroup';
import { useParams } from 'react-router-dom';

const ChangeGroup = () => {

    const { id } = useParams()

    return (
        <BasedFormGroup
            id={id}
        />
    );
}

export default ChangeGroup;
