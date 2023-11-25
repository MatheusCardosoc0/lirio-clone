import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form';
import { CheckInput, ConsultInput } from '../../../components/Inputs';
import { BasicModal } from '../../../components/Modals';
import useBasedFunctionPerson from './basedFunctionPerson';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { clearPersonData } from '../../../redux/actions/PESSOAL/personActions';
import ImageUpload from '../../../components/ImageUpload';
import { MaritalStates } from '../../../utils/MaritialStates';

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
        handleSubmit,
        DeletePerson,
        personData,
        handleChange,
        currentSection,
        sections,
        setCurrentSection
    } = useBasedFunctionPerson(id)

    return (
        <>
            <PrimaryForm
                removeFunction={id ? () => DeletePerson() : null}
                resetFunction={!id ? clearPersonData : null}
                onSubmit={e => handleSubmit(e)}
                sectionOptions={sections}
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
            >
                <BasicGridContainerForm>
                    {currentSection === 'Dados principais' && (
                        <>
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
                                    variant='contained'
                                    color='warning'
                                >
                                    Buscar Dados do CNPJ
                                </Button>
                            )}
                            <TextField
                                label="Nome"
                                name='name'
                                onChange={handleChange}
                                value={personData.name}
                                required
                            />

                            {options === 'PJ' && (
                                <div>
                                    <TextField
                                        label="Razão"
                                        name='razao'
                                        onChange={handleChange}
                                        value={personData.razao}
                                    />

                                    <TextField
                                        label="IBGE"
                                        name='ibge'
                                        onChange={handleChange}
                                        value={personData.ibge}
                                    />
                                </div>
                            )}


                            <div>
                                <TextField
                                    label={options === "PJ" ? "CNPJ" : "CPF"}
                                    name='cpf'
                                    onChange={handleChange}
                                    value={personData.cpf}
                                    required
                                />
                                {options === 'PJ' && (
                                    <TextField
                                        label="Inscrição Estadual"
                                        name='inscricaoEstadual'
                                        onChange={handleChange}
                                        value={personData.inscricaoEstadual}
                                    />
                                )}
                            </div>
                            <div>
                                <TextField
                                    label="CEP"
                                    name='cep'
                                    onChange={handleChange}
                                    value={personData.cep}
                                    required
                                />

                                <TextField
                                    label="Endereço"
                                    name='address'
                                    onChange={handleChange}
                                    value={personData.address}
                                    required
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Telefone"
                                    name='phone'
                                    onChange={handleChange}
                                    value={personData.phone}
                                    required
                                />

                                <TextField
                                    label="Email"
                                    name='email'
                                    onChange={handleChange}
                                    value={personData.email}
                                    required
                                />
                            </div>

                            {options === "PF" && (
                                <div>
                                    <TextField
                                        label={"Data de nascimento"}
                                        name='birthDate'
                                        onChange={handleChange}
                                        value={personData.birthDate}
                                        type='date'
                                    />

                                    <TextField
                                        label={"Idade"}
                                        name='age'
                                        onChange={handleChange}
                                        value={personData.age}
                                        type='number'
                                    />
                                </div>
                            )}
                            <div>
                                <ConsultInput
                                    $isLarge
                                    label={"Cidade"}
                                    onChange={(value) => handleChange('city', value)}
                                    openModal={() => setOpenModalCity(true)}
                                    title={"Consultar cidades cadastradas"}
                                    value={personData.city ? personData.city.name : ''}
                                />

                                <ConsultInput
                                    $isLarge
                                    label={"Grupo"}
                                    onChange={value => handleChange("group", value)}
                                    openModal={() => setOpenModalGroup(true)}
                                    title={"Consultar grupos cadastrados"}
                                    value={personData.group ? personData.group.name : ''}
                                />
                            </div>
                        </>
                    )}
                    {currentSection === "Dados complementares" && (
                        <>
                            <div>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Estado civil
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select-label"
                                        label="Estadocivilaaaaaaaaaa"
                                        onChange={e => handleChange("maritalStatus", e.target.value)}

                                        value={personData.maritalStatus}
                                    >
                                        {MaritalStates.map((value, i) => (
                                            <MenuItem
                                                value={value}
                                                key={i}
                                            >{value}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                < CheckInput
                                    options={[
                                        { title: 'Cliente bloqueado?', value: true }
                                    ]}
                                    setData={value => handleChange("isBlocked", value)}
                                    data={personData.isBlocked}
                                />
                            </div>
                            <TextField
                                label={"Descrição"}
                                name='description'
                                onChange={handleChange}
                                value={personData.description}
                            />
                            <div>
                                <ImageUpload
                                    setImage={value => handleChange("urlImage", value)}
                                    image={personData.urlImage}
                                />
                                <TextField
                                    label={"Habilidades"}
                                    name='habilities'
                                    onChange={handleChange}
                                    value={personData.habilities}
                                />
                            </div>
                        </>
                    )}
                </BasicGridContainerForm>
            </PrimaryForm>
            {openModalCity && (
                <BasicModal
                    Url={'/api/city'}
                    closeModal={() => setOpenModalCity(false)}
                    setObject={((value) => handleChange('city', value))}
                />
            )}

            {openModalGroup && (
                <BasicModal
                    Url={'/api/group'}
                    closeModal={() => setOpenModalGroup(false)}
                    setObject={((value) => handleChange('group', value))}
                />
            )}
        </>
    );
}

export default BasedFormPerson