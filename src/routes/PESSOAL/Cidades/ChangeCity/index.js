import React, { useState } from 'react';
import { BasicGridContainerForm, PrimaryForm } from '../../../../components/Form';
import { BasicInput, BasicSelect, ConsultInput } from '../../../../components/Inputs';
import { useParams } from 'react-router-dom';
import useSubmitDataPut from '../../../../functions/useSubmitDataPut';
import useDeleteData from '../../../../functions/useDeleteData';
import useGetDataSpecific from '../../../../functions/useGetDataSpecific';
import { UFBRStates } from '../../../../utils/UFBRStates';
import { BasicModal } from '../../../../components/Modals';

const ChangeCity = () => {

    const [data, setData] = useState({
        name: '',
        ibgNumber: '',
        state: ''

    })
    const {
        name,
        ibgNumber,
        state
    } = data

    const { id } = useParams()

    const [isOpenModal, setIsOpenModal] = useState(false)

    const urlApi = "/api/city/"
    const urlReturn = "/pessoal/cidades"

    useGetDataSpecific(id, `${urlApi}`, setData)

    const DeletePerson = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPut(`${urlApi}`, urlReturn, id)

    const CheckForOpenModal = () => {
        if (state === '') {
            return alert("Preencha o campo estado")
        }

        setIsOpenModal(true)
    }

    const UpdateDataIdAndName = (newId, newName) => {
        setData(prevData => ({
            ...prevData,
            ibgNumber: newId,
            name: newName
        }));
    }

    return (
        <>
            <PrimaryForm
                Title='Alterar Cidade'
                urlCancel={urlReturn}
                onSubmit={e => handleSubmit(e, {
                    id,
                    name,
                    state,
                    ibgNumber
                })}
                removeFunction={() => DeletePerson()}
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
                    closeModal={() => setIsOpenModal(false)}
                    setValue={(id, name) => UpdateDataIdAndName(id, name)}
                />
            )}
        </>
    );
}

export default ChangeCity;
