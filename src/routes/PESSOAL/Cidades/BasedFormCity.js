import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form'
import useBasedFunctionCity from './basedFunctionCity'
import { ConsultInput } from '../../../components/Inputs'
import { BasicModal } from '../../../components/Modals'
import { UFBRStates } from '../../../utils/UFBRStates'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const BasedFormCity = ({
    id
}) => {

    const {
        CheckForOpenModal,
        DeleteCity,
        UpdateDataIdAndName,
        cityData,
        isOpenModal,
        onSubmit,
        setCityData,
        setIsOpenModal,
        urlReturn
    } = useBasedFunctionCity(id)

    return (
        <>
            <PrimaryForm
                Title={id ? 'Alterar Cidade' : 'Cadastrar Cidade'}
                urlCancel={urlReturn}
                onSubmit={e => onSubmit(e)}
                removeFunction={id ? () => DeleteCity() : null}
            >
                <BasicGridContainerForm>
                    <TextField
                        label={"Nome"}
                        onChange={e => setCityData({ ...cityData, name: e.target.value })}
                        value={cityData.name ? cityData.name : ''}
                        required
                    />
                    <div>
                        <ConsultInput
                            label={"№ IBGE"}
                            openModal={CheckForOpenModal}
                            value={cityData.ibgNumber ? cityData.ibgNumber : ''}
                        />

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                UF do estado
                            </InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                onChange={e => setCityData({ ...cityData, state: e.target.value })}
                                value={cityData.state}
                                variant='outlined'
                                label="aaaaaaaaaaaaaaaaaaaaa"
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
                        </FormControl>

                    </div>
                </BasicGridContainerForm>
            </PrimaryForm >
            {isOpenModal && (
                <BasicModal
                    setObject={value => UpdateDataIdAndName(value)}
                    Url={`/api/IbgeNumbersForCities/fetchData/${cityData.state}`}
                    closeModal={() => setIsOpenModal(false)}
                />
            )
            }
        </>
    )
}

export default BasedFormCity