import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useGetDataSpecific from '../../../functions/Api/useGetDataSpecific'
import useBasedFunctionGroup from './basedFunctionGroup'
import { BasicInput } from '../../../components/Inputs'
import useDeleteData from '../../../functions/Api/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/Api/useSubmitDataPostOrPut'
import { TextField } from '@mui/material'

export const BasedFormGroup = ({
    id
}) => {

    const {
        data,
        setData,
        urlApi,
        urlReturn
    } = useBasedFunctionGroup()

    const {
        name
    } = data

    useGetDataSpecific(id, `${urlApi}`, setData)

    const DeletePersonGroup = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPostOrPut(`${urlApi}`, urlReturn, id)
    return (
        <PrimaryForm
            Title={id ? 'Alterar Grupo' : 'Cadastrar Grupo'}
            urlCancel={urlReturn}
            onSubmit={e => handleSubmit(
                data,
                e,
                "Grupo de pessoas cadastrado com sucesso",
                "Não foi possivel cadastrar o grupo de pessoas"
            )}
            removeFunction={id ? () => DeletePersonGroup() : null}
        >
            <BasicGridContainerForm>
                <TextField
                    label={"Nome"}
                    onChange={e => setData({ ...data, name: e.target.value })}
                    value={name}
                    required
                />
            </BasicGridContainerForm>
        </PrimaryForm>
    )
}
