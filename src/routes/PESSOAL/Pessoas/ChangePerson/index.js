import React, { useEffect, useState } from 'react';
import { PrimaryForm } from '../../../../components/Form';
import { BasicInput } from '../../../../components/Inputs';
import { InputContainerPerson } from '../styles/InputContainerPerson';
import { api } from '../../../../libs/api';
import { useNavigate, useParams } from 'react-router-dom';
import useSubmitDataPut from '../../../../functions/useSubmitDataPut';

const ChangePerson = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState(0)

    const { id } = useParams()
    const navigate = useNavigate()

    async function GetSpecificPerson(id) {
        try {
            const response = await api.get(`api/person/${id}`)
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



    async function DeletePerson() {
        try {
            await api.delete(`/api/person/${id}`)

            alert("Pessoa removida")

            navigate("/pessoal/pessoas")
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = useSubmitDataPut("/api/person/", "/pessoal/pessoas", id)

    return (
        <PrimaryForm
            Title='Alterar Pessoa'
            urlCancel={"/pessoal/pessoas"}
            onSubmit={e => handleSubmit(e, {
                id,
                name,
                email,
                phone,
                age
            })}
            removeFunction={() => DeletePerson()}
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
