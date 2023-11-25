import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useGetDataSpecific from '../../../functions/Api/useGetDataSpecific'
import { BasicInput, CheckInput } from '../../../components/Inputs'
import useDeleteData from '../../../functions/Api/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/Api/useSubmitDataPostOrPut'
import useBasedFunctionCoin from './basedFunctionCoins'
import { TextField } from '@mui/material'

export const BasedFormCoins = ({
    id
}) => {

    const {
        data,
        setData,
        urlApi,
        urlReturn
    } = useBasedFunctionCoin()

    const {
        name
    } = data

    useGetDataSpecific(id, `${urlApi}`, setData)

    const DeleteCoin = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPostOrPut(`${urlApi}`, urlReturn, id)

    return (
        <PrimaryForm
            Title={id ? 'Alterar Moeda' : 'Cadastrar Moeda'}
            urlCancel={urlReturn}
            onSubmit={e => handleSubmit(data, e)}
            removeFunction={id ? () => DeleteCoin() : null}
        >
            <BasicGridContainerForm>
                <TextField
                    label={"Nome"}
                    onChange={e => setData({ ...data, name: e.target.value })}
                    value={name}
                    required
                />
                <CheckInput
                    options={[
                        { title: 'Usar limite de crédito', value: true }
                    ]}
                    setData={setData}
                    data={data}
                    name="isUseCreditLimit"
                />
            </BasicGridContainerForm>
        </PrimaryForm>
    )
}
