import React, { useState } from 'react';
import { BasicGridContainerForm, PrimaryForm } from '../../../../components/Form';
import { BasicInput } from '../../../../components/Inputs';
import { useParams } from 'react-router-dom';
import useSubmitDataPut from '../../../../functions/useSubmitDataPut';
import useDeleteData from '../../../../functions/useDeleteData';
import useGetDataSpecific from '../../../../functions/useGetDataSpecific';

const ChangeGroup = () => {

    const [data, setData] = useState({
        name: ''
    })
    const {
        name
    } = data

    const { id } = useParams()

    const urlApi = "/api/group/"
    const urlReturn = "/pessoal/grupos"

    useGetDataSpecific(id, `${urlApi}`, setData)

    const DeletePerson = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPut(`${urlApi}`, urlReturn, id)

    return (
        <PrimaryForm
            Title='Alterar Grupo'
            urlCancel={urlReturn}
            onSubmit={e => handleSubmit(e, {
                id,
                name,
            })}
            removeFunction={() => DeletePerson()}
        >
            <BasicGridContainerForm>
                <BasicInput label={"Nome"} $isLarge
                    onChange={e => setData({ ...data, name: e.target.value })}
                    value={name}
                />
            </BasicGridContainerForm>
        </PrimaryForm>
    );
}

export default ChangeGroup;
