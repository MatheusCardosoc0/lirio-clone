import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useGetDataSpecific from '../../../functions/Api/useGetDataSpecific'
import useDeleteData from '../../../functions/Api/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/Api/useSubmitDataPostOrPut'
import useBasedFunctionPaymentTerms from './basedFunctionPaymentTerms'
import { TextField } from '@mui/material'
import toast from 'react-hot-toast'

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

    const DeletePaymentCondition = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPostOrPut(`${urlApi}`, urlReturn, id)

    function validateData(e) {
        e.preventDefault()
        if (installments < 1) {
            return toast("Parcelas não podem ser menores que 1")
        }
        handleSubmit(data)
    }

    return (
        <PrimaryForm
            Title={id ? 'Alterar Metodo de pagamento' : 'Cadastrar Metodo de pagamento'}
            urlCancel={urlReturn}
            onSubmit={e => validateData(e)}
            removeFunction={id ? () => DeletePaymentCondition() : null}
        >
            <BasicGridContainerForm>
                <TextField
                    label={"Nome"}
                    onChange={e => setData({ ...data, name: e.target.value })}
                    value={name}
                    required
                />

                <TextField
                    label={"Parcelas"}
                    onChange={e => setData({ ...data, installments: e.target.value })}
                    value={installments}
                    type={"number"}
                />
            </BasicGridContainerForm>
        </PrimaryForm>
    )
}
