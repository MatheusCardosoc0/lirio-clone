import React, { useState } from 'react';
import { PrimaryForm } from '../../../../components/Form';
import { BasicInput } from '../../../../components/Inputs';
import { InputContainerNewPerson } from './styles/InputContainerNewPerson';
import { api } from '../../../../libs/api';

const NewPerson = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState(0)

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            await api.post('/api/user', {
                name,
                email,
                phone,
                age
            })

            alert("Ok")
        } catch (error) {
            alert("Error")
            console.log(error)
        }
    }

    return (
        <PrimaryForm
            urlCancel={"/pessoal/pessoas"}
            onSubmit={handleSubmit}
        >
            <InputContainerNewPerson>
                <BasicInput label={"Nome"} $isLarge
                    onChange={e => setName(e.target.value)} />
                <BasicInput label={"Email"} $isLarge
                    onChange={e => setEmail(e.target.value)} />
                <BasicInput label={"Telefone"} $isLarge
                    onChange={e => setPhone(e.target.value)} />
                <BasicInput label={"Idade"} $isLarge
                    onChange={e => setAge(e.target.value)} />
            </InputContainerNewPerson>
        </PrimaryForm>
    );
}

export default NewPerson;
