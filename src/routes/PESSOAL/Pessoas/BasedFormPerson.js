import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form';
import { BasicInput, CheckInput, ConsultInput, InputDate } from '../../../components/Inputs';
import { ButtonStyle1 } from '../../../components/Buttons';
import { BasicModal } from '../../../components/Modals';
import useBasedFunctionPerson from './basedFunctionPerson';
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut';
import useDeleteData from '../../../functions/useDeleteData';
import useGetDataSpecific from '../../../functions/useGetDataSpecific';
import { Button, TextField } from '@mui/material';

const BasedFormPerson = ({
    id
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
                Title={id ? "Alterar pessoa" : "Cadastro de pessoas"}
                urlCancel={urlReturn}
                removeFunction={id ? () => DeletePerson() : null}
                onSubmit={(e) => handleSubmit(e, { ...data, razao: razao || name })}
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
                    {options === 'PJ' && (
                        <Button
                            type="button"
                            onClick={fetchDataCNPJ}
                            variant='outlined'
                        >
                            Buscar Dados do CNPJ
                        </Button>
                    )}
                    <TextField
                        label={"Nome"}
                        $isLarge
                        onChange={e => setData({ ...data, name: e.target.value })}
                        value={name} />

                    {options === 'PJ' && (
                        <div>
                            <TextField
                                label={"Razão"}
                                $isLarge
                                onChange={e => setData({ ...data, razao: e.target.value })}
                                value={razao || name} />

                            <TextField
                                label={"IBGE"}
                                $isLarge
                                onChange={e => setData({ ...data, ibge: e.target.value })}
                                value={ibge} />
                        </div>
                    )}


                    <div>
                        <TextField
                            label={options === "PJ" ? "CNPJ" : "CPF"}
                            $isLarge
                            onChange={e => setData({ ...data, cpf: e.target.value })}
                            value={cpf}
                        />
                        {options === 'PJ' && (
                            <TextField
                                label={"Inscrição Estadual"}
                                $isLarge
                                onChange={e => setData({ ...data, inscricaoEstadual: e.target.value })}
                                value={inscricaoEstadual}
                            />
                        )}
                    </div>
                    <div>
                        <TextField
                            label={"CEP"}
                            $isLarge
                            onChange={e => setData({ ...data, cep: e.target.value })}
                            value={cep}
                        />
                        <TextField
                            label={"Endereço"}
                            $isLarge
                            onChange={e => setData({ ...data, address: e.target.value })}
                            value={address}
                        />
                    </div>
                    <div>
                        <TextField label={"Telefone"} $isLarge
                            onChange={e => setData({ ...data, phone: e.target.value })}
                            value={phone}
                        />
                        <TextField
                            label={"Email"} $isLarge
                            onChange={e => setData({ ...data, email: e.target.value })}
                            value={email}

                        />

                    </div>

                    {options === "PF" && (
                        <div>
                            <TextField
                                setDate={setData}
                                onChange={e => setData({ ...data, age: e.target.value })}
                                type='date'
                            />

                            <TextField
                                label={"Idade"}
                                onChange={e => setData({ ...data, age: e.target.value })}
                                value={age}
                                type='number'
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



                </BasicGridContainerForm>
            </PrimaryForm>
            {openModalCity && (
                <BasicModal
                    Url={'/api/city'}
                    closeModal={() => setOpenModalCity(false)}
                    setObject={value => setData({ ...data, city: value })}
                    isUseGetAllValue
                />
            )}

            {openModalGroup && (
                <BasicModal
                    Url={'/api/group'}
                    closeModal={() => setOpenModalGroup(false)}
                    setObject={value => setData({ ...data, group: value })}
                />
            )}
        </>
    );
}

export default BasedFormPerson