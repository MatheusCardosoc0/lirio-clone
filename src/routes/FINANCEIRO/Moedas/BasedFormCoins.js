import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useGetDataSpecific from '../../../functions/useGetDataSpecific'
import { BasicInput, CheckInput } from '../../../components/Inputs'
import useDeleteData from '../../../functions/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut'
import useBasedFunctionCoin from './basedFunctionCoins'

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
            Title={id ? 'Alterar Grupo' : 'Cadastrar Grupo'}
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
                <BasicInput label={"Nome"} $isLarge
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
