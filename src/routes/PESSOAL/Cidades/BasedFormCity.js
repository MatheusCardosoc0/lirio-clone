import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useBasedFunctionCity from './basedFunctionCity'
import { ConsultInput } from '../../../components/Inputs'
import { BasicModal } from '../../../components/Modals'
import { UFBRStates } from '../../../utils/UFBRStates'
import { MenuItem, Select, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

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