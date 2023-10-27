import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useGetDataSpecific from '../../../functions/useGetDataSpecific'
import { BasicInput, CheckInput } from '../../../components/Inputs'
import useDeleteData from '../../../functions/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut'
import useBasedFunctionPaymentTerms from './basedFunctionPaymentTerms'

export const BasedFormPaymentTerms = ({
    id
}) => {

    const {
        data,
        setData,
        urlApi,
        urlReturn
    } = useBasedFunctionPaymentTerms()

    const {
        name,
        installments
    } = data

    useGetDataSpecific(id, `${urlApi}`, setData)

    const DeletePaymentTerm = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPostOrPut(`${urlApi}`, urlReturn, id)
    return (
        <PrimaryForm
            Title={id ? 'Alterar Metodo de pagamento' : 'Cadastrar Metodo de pagamento'}
            urlCancel={urlReturn}
            onSubmit={e => handleSubmit(e, {
                id,
                name,
                installments
            })}
            removeFunction={() => {
                id && DeletePaymentTerm()
            }}
        >
            <BasicGridContainerForm>
                <BasicInput label={"Nome"} $isLarge
                    onChange={e => setData({ ...data, name: e.target.value })}
                    value={name}
                />

                <BasicInput label={"Parcelas"} $isLarge
                    onChange={e => setData({ ...data, installments: e.target.value })}
                    value={installments}
                    type={"number"}
                />
            </BasicGridContainerForm>
        </PrimaryForm>
    )
}
