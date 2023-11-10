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
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

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
        data,
        urlReturn,
        urlApi,
    } = useBasedFunctionPerson()

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        getValues,
    } = useForm({
        values: {
            age: 0
        }
    });

    const submitData = useSubmitDataPostOrPut(urlApi, urlReturn, id);
    const DeletePerson = useDeleteData(`${urlApi}`, id, urlReturn)

    const group = getValues("group")
    const city = getValues("city")

    console.log(data)


    const onSubmit = (data) => {
        if (!data.group) {
            toast("Informe o grupo da pessoa")
        }
        else if (!data.city) {
            toast("Informe a cidade da pessoa")
        }
        submitData(data)
    }

    useGetDataSpecific(id, `${urlApi}`, (data) => {
        if (data) {
            Object.keys(data).forEach(key => {
                setValue(key, data[key]);
            });
        }
    })

    return (
        <>
            <PrimaryForm
                Title={id ? "Alterar pessoa" : "Cadastro de pessoas"}
                urlCancel={urlReturn}
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
                        helperText={errors.name ? errors.name.message : ''}
                        required
                    />

                    {options === 'PJ' && (
                        <div>
                            <TextField
                                label="Razão"
                                {...register("razao")}
                                helperText={errors.razao ? errors.razao.message : ''}
                            />

                            <TextField
                                label="IBGE"
                                {...register("ibge")}
                                helperText={errors.ibge ? errors.ibge.message : ''}
                            />
                        </div>
                    )}


                    <div>
                        <TextField
                            label={options === "PJ" ? "CNPJ" : "CPF"}
                            {...register("cpf")}
                            helperText={errors.cpf ? errors.cpf.message : ''}
                            required
                        />
                        {options === 'PJ' && (
                            <TextField
                                label="Inscrição Estadual"
                                {...register("inscricaoEstadual")}
                                helperText={errors.inscricaoEstadual ? errors.inscricaoEstadual.message : ''}
                            />
                        )}
                    </div>
                    <div>
                        <TextField
                            label="CEP"
                            {...register("cep")}
                            helperText={errors.cep ? errors.cep.message : ''}
                            required
                        />

                        <TextField
                            label="Endereço"
                            {...register("address")}
                            helperText={errors.address ? errors.address.message : ''}
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            label="Telefone"
                            {...register("phone")}
                            helperText={errors.phone ? errors.phone.message : ''}
                            required
                        />

                        <TextField
                            label="Email"
                            {...register("email")}
                            helperText={errors.email ? errors.email.message : ''}
                            required
                        />
                    </div>

                    {options === "PF" && (
                        <div>
                            <TextField
                                label={"Data de nascimento"}
                                {...register("birthDate")}
                                type='date'
                                helperText={errors.birthDate ? errors.birthDate.message : ''}
                            />

                            <TextField
                                label={"Idade"}
                                {...register("age")}
                                helperText={errors.age ? errors.age.message : ''}
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
                    isUseGetAllValue
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