import React, { useState } from 'react';
import { BasicGridContainerForm, PrimaryForm } from '../../../../components/Form';
import { BasicInput, ConsultInput } from '../../../../components/Inputs';
import { useParams } from 'react-router-dom';
import useSubmitDataPut from '../../../../functions/useSubmitDataPut';
import useDeleteData from '../../../../functions/useDeleteData';
import useGetDataSpecific from '../../../../functions/useGetDataSpecific';
import { BasicModal } from '../../../../components/Modals';

const ChangePerson = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        age: 0,
        phone: '',
        group: {},
        city: {}
    })
    const {
        age,
        email,
        name,
        phone,
        city,
        group
    } = data

    const { id } = useParams()

    const [openModalCity, setOpenModalCity] = useState(false)
    const [openModalGroup, setOpenModalGroup] = useState(false)

    const urlApi = "/api/person/"
    const urlReturn = "/pessoal/pessoas"

    useGetDataSpecific(id, `${urlApi}`, setData)

    const DeletePerson = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPut(`${urlApi}`, urlReturn, id)

    return (
        <>
            <PrimaryForm
                Title='Alterar Pessoa'
                urlCancel={"/pessoal/pessoas"}
                onSubmit={e => handleSubmit(e, {
                    id,
                    name,
                    email,
                    phone,
                    age,
                    group,
                    city
                })}
                removeFunction={() => DeletePerson()}
            >
                <BasicGridContainerForm>
                    <div>
                        <BasicInput
                            label={"Nome"}
                            value={data.name}
                            $isLarge
                            onChange={e => setData({ ...data, name: e.target.value })} />
                        <BasicInput
                            label={"Email"}
                            value={data.email}
                            $isLarge
                            onChange={e => setData({ ...data, email: e.target.value })} />
                    </div>
                    <div>
                        <BasicInput
                            label={"Telefone"}
                            value={data.phone}
                            $isLarge
                            onChange={e => setData({ ...data, phone: e.target.value })} />

                        <BasicInput
                            label={"Idade"}
                            value={data.age}
                            $isLarge
                            onChange={e => setData({ ...data, age: e.target.value })} />
                    </div>

                    <ConsultInput
                        $isLarge
                        label={"Cidade"}
                        onChange={value => setData({ ...data, city: value })}
                        openModal={() => setOpenModalCity(true)}
                        title={"Consultar cidades cadastradas"}
                        value={data.city?.name}
                    />

                    <ConsultInput
                        $isLarge
                        label={"Grupo"}
                        onChange={value => setData({ ...data, group: value })}
                        openModal={() => setOpenModalGroup(true)}
                        title={"Consultar grupos cadastrados"}
                        value={data.group?.name}
                    />
                </BasicGridContainerForm>
            </PrimaryForm>
            {openModalCity && (
                <BasicModal
                    Url={'/api/city'}
                    closeModal={() => setOpenModalCity(false)}
                    setObject={value => setData({ ...data, city: value })}
                    filed1={"id"}
                    filed2={"name"}
                />
            )}

            {openModalGroup && (
                <BasicModal
                    Url={'/api/group'}
                    closeModal={() => setOpenModalGroup(false)}
                    setObject={value => setData({ ...data, group: value })}
                    filed1={"id"}
                    filed2={"name"}
                />
            )}
        </>
    );
}

export default ChangePerson;
