import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useGetDataSpecific from '../../../functions/Api/useGetDataSpecific'
import useDeleteData from '../../../functions/Api/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/Api/useSubmitDataPostOrPut'
import useBasedFunctionProductGroup from './basedFunctionProductGroup'
import { TextField } from '@mui/material'

export const BasedFormProductGroup = ({
    id
}) => {

    const {
        data,
        setData,
        urlApi,
        urlReturn
    } = useBasedFunctionProductGroup()

    const {
        name
    } = data

    useGetDataSpecific(id, `${urlApi}`, setData)

    const DeleteProductGroup = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPostOrPut(`${urlApi}`, urlReturn, id)

    return (
        <PrimaryForm
            Title={id ? 'Alterar Grupo de Produtos' : 'Cadastrar Grupo de Produtos'}
            urlCancel={urlReturn}
            onSubmit={e => handleSubmit(data, e)}
            removeFunction={id ? () => DeleteProductGroup() : null}
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
