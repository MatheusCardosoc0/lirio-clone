import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useGetDataSpecific from '../../../functions/useGetDataSpecific'
import useBasedFunctionGroup from './basedFunctionGroup'
import { BasicInput } from '../../../components/Inputs'
import useDeleteData from '../../../functions/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut'

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

    const DeletePerson = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPostOrPut(`${urlApi}`, urlReturn, id)
    return (
        <PrimaryForm
            Title={id ? 'Alterar Grupo' : 'Cadastrar Grupo'}
            urlCancel={urlReturn}
            onSubmit={e => handleSubmit(e, {
                id,
                name,
            })}
            removeFunction={() => {
                id && DeletePerson()
            }}
        >
            <BasicGridContainerForm>
                <BasicInput label={"Nome"} $isLarge
                    onChange={e => setData({ ...data, name: e.target.value })}
                    value={name}
                />
            </BasicGridContainerForm>
        </PrimaryForm>
    )
}
