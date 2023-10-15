import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form';
import { BasicInput, CheckInput, ConsultInput, InputDate } from '../../../components/Inputs';
import { ButtonStyle1 } from '../../../components/Buttons';
import { BasicModal } from '../../../components/Modals';
import useBasedFunctionPerson from './basedFunctionPerson';
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut';
import useDeleteData from '../../../functions/useDeleteData';
import useGetDataSpecific from '../../../functions/useGetDataSpecific';

const BasedFormPerson = ({
    id = null
}) => {
    const {
        setOpenModalCity,
        setOpenModalGroup,
        setOptions,
        fetchDataCNPJ,
        fetchDataCPF,
        openModalCity,
        openModalGroup,
        options,
        data,
        setData,
        urlReturn,
        urlApi,
    } = useBasedFunctionPerson()

    const {
        address,
        age,
        birthDate,
        cep,
        city,
        cpf,
        email,
        group,
        ibge,
        inscricaoEstadual,
        name,
        phone,
        razao
    } = data

    const handleSubmit = useSubmitDataPostOrPut(urlApi, urlReturn, id);
    const DeletePerson = useDeleteData(`${urlApi}`, id, urlReturn)

    useGetDataSpecific(id, `${urlApi}`, setData)

    return (
        <>
            <PrimaryForm
                Title="Cadastro de pessoas"
                urlCancel={urlReturn}
                removeFunction={() => {
                    id && DeletePerson()
                }}
                onSubmit={(e) => handleSubmit(e, {
                    name,
                    email,
                    phone,
                    age,
                    city,
                    group,
                    ibge,
                    inscricaoEstadual,
                    Razao: razao || name,
                    cep,
                    cpf,
                    birthDate,
                    address,
                    id
                }
                )}
            >
                <BasicGridContainerForm>
                    <CheckInput
                        options={[
                            { title: 'Pessoa Fisica', value: 'PF' },
                            { title: 'Pessoa Jurídica', value: 'PJ' }
                        ]}
                        setData={setOptions}
                        data={options}
                    />
                    <BasicInput
                        label={"Nome"}
                        $isLarge
                        onChange={e => setData({ ...data, name: e.target.value })}
                        value={name} />

                    {options === 'PJ' && (
                        <div>
                            <BasicInput
                                label={"Razão"}
                                $isLarge
                                onChange={e => setData({ ...data, razao: e.target.value })}
                                value={razao || name} />

                            <BasicInput
                                label={"IBGE"}
                                $isLarge
                                onChange={e => setData({ ...data, ibge: e.target.value })}
                                value={ibge} />
                        </div>
                    )}


                    <div>
                        <BasicInput
                            label={options === "PJ" ? "CNPJ" : "CPF"}
                            $isLarge
                            onChange={e => setData({ ...data, cpf: e.target.value })}
                            value={cpf}
                        />
                        {options === 'PJ' && (
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

                    {options === "PF" && (
                        <div>
                            <InputDate
                                label={"Data de Nascimento"}
                                $isLarge
                                setDate={setData}
                                value={birthDate}
                                object={data}
                            />

                            <BasicInput label={"Idade"} $isLarge
                                onChange={e => setData({ ...data, age: e.target.value })}
                                value={age}
                            />
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




                    {options === 'PF' ? (
                        <ButtonStyle1
                            type="button"
                            onClick={fetchDataCPF}
                            $color={'indigo'}
                        >
                            Buscar Dados do CPF
                        </ButtonStyle1>
                    ) : (
                        <ButtonStyle1
                            type="button"
                            onClick={fetchDataCNPJ}
                            $color={'purple'}
                        >
                            Buscar Dados do CNPJ
                        </ButtonStyle1>
                    )}

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

export default BasedFormPerson