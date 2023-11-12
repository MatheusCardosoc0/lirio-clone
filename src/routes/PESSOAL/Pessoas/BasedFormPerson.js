import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form';
import { CheckInput, ConsultInput } from '../../../components/Inputs';
import { BasicModal } from '../../../components/Modals';
import useBasedFunctionPerson from './basedFunctionPerson';
import { Button, TextField } from '@mui/material';

const BasedFormPerson = ({
    id
}) => {
    const {
        setOpenModalCity,
        setOpenModalGroup,
        setOptions,
        fetchDataCNPJ,
        openModalCity,
        openModalGroup,
        options,
        city,
        group,
        handleSubmit,
        onSubmit,
        register,
        DeletePerson,
        setValue
    } = useBasedFunctionPerson(id)

    return (
        <>
            <PrimaryForm
                Title={id ? "Alterar pessoa" : "Cadastro de pessoas"}
                removeFunction={id ? () => DeletePerson() : null}
                onSubmit={handleSubmit(onSubmit)}
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
                        label="Nome"
                        {...register("name")}
                        required
                    />

                    {options === 'PJ' && (
                        <div>
                            <TextField
                                label="Razão"
                                {...register("razao")}
                            />

                            <TextField
                                label="IBGE"
                                {...register("ibge")}
                            />
                        </div>
                    )}


                    <div>
                        <TextField
                            label={options === "PJ" ? "CNPJ" : "CPF"}
                            {...register("cpf")}
                            required
                        />
                        {options === 'PJ' && (
                            <TextField
                                label="Inscrição Estadual"
                                {...register("inscricaoEstadual")}
                            />
                        )}
                    </div>
                    <div>
                        <TextField
                            label="CEP"
                            {...register("cep")}
                            required
                        />

                        <TextField
                            label="Endereço"
                            {...register("address")}
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            label="Telefone"
                            {...register("phone")}
                            required
                        />

                        <TextField
                            label="Email"
                            {...register("email")}
                            required
                        />
                    </div>

                    {options === "PF" && (
                        <div>
                            <TextField
                                label={"Data de nascimento"}
                                {...register("birthDate")}
                                type='date'
                            />

                            <TextField
                                label={"Idade"}
                                {...register("age")}
                                type='number'
                            />
                        </div>
                    )}
                    <div>
                        <ConsultInput
                            $isLarge
                            label={"Cidade"}
                            onChange={value => setValue("city", value)}
                            openModal={() => setOpenModalCity(true)}
                            title={"Consultar cidades cadastradas"}
                            value={city ? city.name : ''}
                        />

                        <ConsultInput
                            $isLarge
                            label={"Grupo"}
                            onChange={value => setValue("group", value)}
                            openModal={() => setOpenModalGroup(true)}
                            title={"Consultar grupos cadastrados"}
                            value={group ? group.name : ''}
                        />
                    </div>



                </BasicGridContainerForm>
            </PrimaryForm>
            {openModalCity && (
                <BasicModal
                    Url={'/api/city'}
                    closeModal={() => setOpenModalCity(false)}
                    setObject={value => setValue("city", value)}
                />
            )}

            {openModalGroup && (
                <BasicModal
                    Url={'/api/group'}
                    closeModal={() => setOpenModalGroup(false)}
                    setObject={value => setValue("group", value)}
                />
            )}
        </>
    );
}

export default BasedFormPerson