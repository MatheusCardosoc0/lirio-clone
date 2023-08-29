import React from 'react';
import { PrimaryForm } from '../../../../components/Form';
import { BasicInput } from '../../../../components/Inputs';
import { InputContainerNewPerson } from './styles/InputContainerNewPerson';

const NewPerson = () => {
    return (
        <PrimaryForm urlCancel={"/pessoal/pessoas"} >
            <InputContainerNewPerson>
                <BasicInput label={"Nome"} $isLarge />
                <BasicInput label={"Email"} $isLarge />
                <BasicInput label={"Telefone"} $isLarge />
                <BasicInput label={"Idade"} $isLarge />
            </InputContainerNewPerson>
        </PrimaryForm>
    );
}

export default NewPerson;
