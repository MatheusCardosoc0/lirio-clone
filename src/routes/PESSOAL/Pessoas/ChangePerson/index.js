import React, { useState } from 'react';
import { BasicGridContainerForm, PrimaryForm } from '../../../../components/Form';
import { BasicInput } from '../../../../components/Inputs';
import { useParams } from 'react-router-dom';
import useSubmitDataPut from '../../../../functions/useSubmitDataPut';
import useDeleteData from '../../../../functions/useDeleteData';
import useGetDataSpecific from '../../../../functions/useGetDataSpecific';

const ChangePerson = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        age: 0,
        phone: ''
    })
    const {
        age,
        email,
        name,
        phone
    } = data

    const { id } = useParams()

    const urlApi = "/api/person/"
    const urlReturn = "/pessoal/pessoas"

    useGetDataSpecific(id, `${urlApi}`, setData)

    const DeletePerson = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPut(`${urlApi}`, urlReturn, id)

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
            <BasicGridContainerForm>
                <BasicInput label={"Nome"} $isLarge
                    onChange={e => setData({ ...data, name: e.target.value })}
                    value={name}
                />
                <BasicInput label={"Email"} $isLarge
                    onChange={e => setData({ ...data, email: e.target.value })}
                    value={email}
                />
                <BasicInput label={"Telefone"} $isLarge
                    onChange={e => setData({ ...data, phone: e.target.value })}
                    value={phone}
                />
                <BasicInput label={"Idade"} $isLarge
                    onChange={e => setData({ ...data, age: e.target.value })}
                    value={age}
                />
            </BasicGridContainerForm>
        </PrimaryForm>
    );
}

export default ChangePerson;
