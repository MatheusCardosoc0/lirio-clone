import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useGetDataSpecific from '../../../functions/useGetDataSpecific'
import { BasicInput, CheckInput } from '../../../components/Inputs'
import useDeleteData from '../../../functions/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut'
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
        name,
        isUseCreditLimit
    } = data

    useGetDataSpecific(id, `${urlApi}`, setData)

    const DeleteCoin = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPostOrPut(`${urlApi}`, urlReturn, id)
    return (
        <PrimaryForm
            Title={id ? 'Alterar Moeda' : 'Cadastrar Moeda'}
            urlCancel={urlReturn}
            onSubmit={e => handleSubmit(e, {
                id,
                name,
                isUseCreditLimit
            })}
            removeFunction={() => {
                id && DeleteCoin()
            }}
        >
            <BasicGridContainerForm>
                <TextField
                    label={"Nome"}
                    onChange={e => setData({ ...data, name: e.target.value })}
                    value={name}
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
