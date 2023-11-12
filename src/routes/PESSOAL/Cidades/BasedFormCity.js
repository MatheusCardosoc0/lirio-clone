import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useBasedFunctionCity from './basedFunctionCity'
import useGetDataSpecific from '../../../functions/useGetDataSpecific'
import useDeleteData from '../../../functions/useDeleteData'
import { BasicInput, BasicSelect, ConsultInput } from '../../../components/Inputs'
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut'
import { BasicModal } from '../../../components/Modals'
import { UFBRStates } from '../../../utils/UFBRStates'
import { Container, MenuItem, Select, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const BasedFormCity = ({
    id
}) => {

    const {
        isOpenModal,
        setIsOpenModal,
        urlReturn,
        CheckForOpenModal,
        DeleteCity,
        UpdateDataIdAndName,
        control,
        handleSubmit,
        onSubmit,
        register,
        ibgNumber,
        setValue,
        state
    } = useBasedFunctionCity(id)



    return (
        <>
            <PrimaryForm
                Title={id ? 'Alterar Cidade' : 'Cadastrar Cidade'}
                urlCancel={urlReturn}
                onSubmit={handleSubmit(onSubmit)}
                removeFunction={id ? () => DeleteCity() : null}
            >
                <BasicGridContainerForm>
                    <TextField
                        label={"Nome"}
                        {...register("name")}
                        required
                    />
                    <div>
                        <ConsultInput
                            label={"№ IBGE"}
                            openModal={CheckForOpenModal}
                            onChange={value => setValue("ibgNumber", value)}
                            value={ibgNumber ? ibgNumber : ''}
                        />
                        <Controller
                            name='state'
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    variant='outlined'
                                >
                                    {UFBRStates.map((UF, i) => (
                                        <MenuItem
                                            key={i}
                                            value={UF}
                                        >
                                            {UF}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </div>
                </BasicGridContainerForm>
            </PrimaryForm >
            {isOpenModal && (
                <BasicModal
                    setObject={value => UpdateDataIdAndName(value)}
                    Url={`/api/IbgeNumbersForCities/fetchData/${state}`}
                    closeModal={() => setIsOpenModal(false)}
                />
            )
            }
        </>
    )
}

export default BasedFormCity