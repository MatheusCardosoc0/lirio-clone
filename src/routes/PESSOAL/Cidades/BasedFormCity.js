import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useBasedFunctionCity from './basedFunctionCity'
import useGetDataSpecific from '../../../functions/useGetDataSpecific'
import useDeleteData from '../../../functions/useDeleteData'
import { BasicInput, BasicSelect, ConsultInput } from '../../../components/Inputs'
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut'
import { BasicModal } from '../../../components/Modals'
import { UFBRStates } from '../../../utils/UFBRStates'

const BasedFormCity = ({
    id
}) => {

    const {
        data,
        CheckForOpenModal,
        UpdateDataIdAndName,
        isOpenModal,
        setData,
        setIsOpenModal,
        urlApi,
        urlReturn
    } = useBasedFunctionCity()

    const {
        ibgNumber,
        name,
        state
    } = data

    useGetDataSpecific(id, `${urlApi}`, setData)

    const DeleteCity = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPostOrPut(`${urlApi}`, urlReturn, id)

    return (
        <>
            <PrimaryForm
                Title={id ? 'Alterar Cidade' : 'Cadastrar Cidade'}
                urlCancel={urlReturn}
                onSubmit={e => handleSubmit(e, {
                    id,
                    name,
                    state,
                    ibgNumber
                })}
                removeFunction={() => DeleteCity()}
            >
                <BasicGridContainerForm>
                    <BasicInput
                        label={"Nome"}
                        $isLarge
                        onChange={e => setData({ ...data, name: e.target.value })}
                        value={name}
                    />
                    <div>
                        <ConsultInput
                            label={"№ IBGE"}
                            $isLarge
                            openModal={CheckForOpenModal}
                            onChange={e => setData({ ...data, ibgNumber: e.target.value })}
                            value={ibgNumber}
                        />
                        <BasicSelect
                            label={"UF"}
                            $isLarge
                            onChange={e => setData({ ...data, state: e.target.value })}
                            options={UFBRStates}
                        />
                    </div>
                </BasicGridContainerForm>
            </PrimaryForm>
            {isOpenModal && (
                <BasicModal
                    IDForUrl={state}
                    setObject={setData}
                    Url={`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`}
                    closeModal={() => setIsOpenModal(false)}
                    setValue={(id, name) => UpdateDataIdAndName(id, name)}
                    filed1={"id"}
                    filed2={"nome"}
                />
            )}
        </>
    )
}

export default BasedFormCity