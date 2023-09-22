import React, { useState } from 'react';
import { BasicGridContainerForm, PrimaryForm } from '../../../../components/Form';
import { BasicInput, ConsultInput, InputDate, CheckInput } from '../../../../components/Inputs';
import { useParams } from 'react-router-dom';
import useSubmitDataPut from '../../../../functions/useSubmitDataPut';
import useDeleteData from '../../../../functions/useDeleteData';
import useGetDataSpecific from '../../../../functions/useGetDataSpecific';
import { BasicModal } from '../../../../components/Modals';
import { ButtonStyle1 } from '../../../../components/Buttons';

const ChangePerson = () => {

    const [data, setData] = useState({
        name: '',
        razao: '',
        email: '',
        phone: '',
        CPF: '',
        IBGE: '',
        inscricaoEstadual: '',
        address: '',
        birthDate: '',
        age: 0,
        city: {},
        group: {},
        cep: ''
    });


    const { name, razao, email, phone, CPF, IBGE, inscricaoEstadual, address, birthDate, age, city, group, cep } = data;

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
                Title="Cadastro de pessoas"
                urlCancel={"/pessoal/pessoas"}
                onSubmit={(e) => handleSubmit(e, "/pessoal/pessoas", {
                    name,
                    email,
                    phone,
                    age,
                    city,
                    group,
                    ibge: IBGE,
                    inscricaoEstadual,
                    Razao: razao || name,
                    cep,
                    cpf: CPF,
                    birthDate,
                    address
                }
                )}
            >
                <BasicGridContainerForm>
                    <BasicInput
                        label={"Nome"}
                        $isLarge
                        onChange={e => setData({ ...data, name: e.target.value })}
                        value={name} />

                    {CPF.length === 14 && (
                        <div>
                            <BasicInput
                                label={"Razão"}
                                $isLarge
                                onChange={e => setData({ ...data, razao: e.target.value })}
                                value={razao || name} />

                            <BasicInput
                                label={"IBGE"}
                                $isLarge
                                onChange={e => setData({ ...data, IBGE: e.target.value })}
                                value={IBGE} />
                        </div>
                    )}


                    <div>
                        <BasicInput
                            label={CPF.length === 14 ? "CNPJ" : "CPF"}
                            $isLarge
                            onChange={e => setData({ ...data, CPF: e.target.value })}
                            value={CPF}
                        />
                        {CPF.length === 14 && (
                            <BasicInput
                                label={"Inscrição Estadual"}
                                $isLarge
                                onChange={e => setData({ ...data, inscricaoEstadual: e.target.value })}
                                value={inscricaoEstadual}
                            />
                        )}
                    </div>
                    <div>
                        <BasicInput
                            label={"CEP"}
                            $isLarge
                            onChange={e => setData({ ...data, cep: e.target.value })}
                            value={cep}
                        />
                        <BasicInput
                            label={"Endereço"}
                            $isLarge
                            onChange={e => setData({ ...data, address: e.target.value })}
                            value={address}
                        />
                    </div>
                    <div>
                        <BasicInput label={"Telefone"} $isLarge
                            onChange={e => setData({ ...data, phone: e.target.value })}
                            value={phone}
                        />
                        <BasicInput
                            label={"Email"} $isLarge
                            onChange={e => setData({ ...data, email: e.target.value })}
                            value={email}

                        />

                    </div>

                    {CPF.length === 14 && (
                        <div>
                            <InputDate
                                label={"Data de Nascimento"}
                                $isLarge
                                setDate={setData}
                                value={birthDate}
                                object={data}
                            />

                            <BasicInput label={"Idade"} $isLarge
                                onChange={e => setData({ ...data, age: e.target.value })} value={age} />
                        </div>
                    )}
                    <div>
                        <ConsultInput
                            $isLarge
                            label={"Cidade"}
                            onChange={value => setData({ ...data, city: value })}
                            openModal={() => setOpenModalCity(true)}
                            title={"Consultar cidades cadastradas"}
                            value={city.name}
                        />

                        <ConsultInput
                            $isLarge
                            label={"Grupo"}
                            onChange={value => setData({ ...data, group: value })}
                            openModal={() => setOpenModalGroup(true)}
                            title={"Consultar grupos cadastrados"}
                            value={group.name}
                        />
                    </div>






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
