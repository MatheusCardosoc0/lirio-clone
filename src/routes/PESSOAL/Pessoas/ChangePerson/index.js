import React, { useEffect, useState } from 'react';
import { PrimaryForm } from '../../../../components/Form';
import { BasicInput } from '../../../../components/Inputs';
import { InputContainerPerson } from '../styles/InputContainerPerson';
import { api } from '../../../../libs/api';
import { useNavigate, useParams } from 'react-router-dom';

const ChangePerson = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState(0)

    const { id } = useParams()
    const navigate = useNavigate()

    async function GetSpecificPerson(id) {
        try {
            const response = await api.get(`api/user/${id}`)
            const { data } = response

            setName(data.name)
            setEmail(data.email)
            setPhone(data.phone)
            setAge(data.age)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        GetSpecificPerson(id)
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            await api.put(`/api/user/${id}`, {
                id,
                name,
                email,
                phone,
                age
            })

            alert("Ok")

            navigate("/pessoal/pessoas")
        } catch (error) {
            alert("Error")
            console.log(error)
        }
    }

    return (
        <PrimaryForm
            Title='Alterar Pessoa'
            urlCancel={"/pessoal/pessoas"}
            onSubmit={handleSubmit}
        >
            <InputContainerPerson>
                <BasicInput label={"Nome"} $isLarge
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <BasicInput label={"Email"} $isLarge
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <BasicInput label={"Telefone"} $isLarge
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                />
                <BasicInput label={"Idade"} $isLarge
                    onChange={e => setAge(e.target.value)}
                    value={age}
                />
            </InputContainerPerson>
        </PrimaryForm>
    );
}

export default ChangePerson;
