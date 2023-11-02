import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form';
import { BasicInput, ConsultInput } from '../../../components/Inputs';
import { BasicModal } from '../../../components/Modals';
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut';
import useDeleteData from '../../../functions/useDeleteData';
import useGetDataSpecific from '../../../functions/useGetDataSpecific';
import useBasedFunctionUsers from './basedFunctionsUsers';

const BasedFormUser = ({
    id
}) => {
    const {
        data,
        openModalPerson,
        setOpenModalPerson,
        setData,
        urlApi,
        urlReturn
    } = useBasedFunctionUsers()

    const {
        name,
        person,
        password
    } = data

    const handleSubmit = useSubmitDataPostOrPut(urlApi, urlReturn, id);
    const DeleteProduct = useDeleteData(`${urlApi}`, id, urlReturn)

    useGetDataSpecific(id, `${urlApi}`, setData)

    return (
        <>
            <PrimaryForm
                Title={id ? "Alterar usuário" : "Cadastro de usuários"}
                urlCancel={urlReturn}
                removeFunction={id ? () => DeleteProduct() : null}
                onSubmit={(e) => handleSubmit(e, data)}
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
                            $isLarge
                            label={"Pessoas"}
                            onChange={value => setData({ ...data, person: value })}
                            openModal={() => setOpenModalPerson(true)}
                            title={"Consultar pessoas cadastradas"}
                            value={person.name}
                        />

                        <BasicInput
                            label={id ? "Alterar Senha" : "Senha"}
                            $isLarge
                            onChange={e => setData({ ...data, password: e.target.value })}
                            value={password}
                            type={"password"}
                        />

                    </div>

                </BasicGridContainerForm>
            </PrimaryForm>
            {openModalPerson && (
                <BasicModal
                    Url={'/api/person'}
                    closeModal={() => setOpenModalPerson(false)}
                    setObject={value => setData({ ...data, person: value })}
                />
            )}
        </>
    );
}

export default BasedFormUser