import React from 'react'
import { BasicGridContainerForm, PrimaryForm } from '../../../components/Form';
import { ConsultInput } from '../../../components/Inputs';
import { BasicModal } from '../../../components/Modals';
import useBasedFunctionUsers from './basedFunctionsUsers';
import { TextField } from '@mui/material';

const BasedFormUser = ({
    id
}) => {
    const {
        openModalPerson,
        setOpenModalPerson,
        DeleteUser,
        handleSubmit,
        onSubmit,
        urlReturn,
        person,
        register,
        setValue,
    } = useBasedFunctionUsers(id)


    return (
        <>
            <PrimaryForm
                urlCancel={urlReturn}
                removeFunction={id ? () => DeleteUser() : null}
                onSubmit={handleSubmit(onSubmit)}
            >
                <BasicGridContainerForm>
                    <TextField
                        label={"Nome"}
                        {...register("name")}
                        required
                    />

                    <div>
                        <ConsultInput
                            $isLarge
                            label={"Pessoas"}
                            onChange={value => setValue("person", value)}
                            openModal={() => setOpenModalPerson(true)}
                            title={"Consultar pessoas cadastradas"}
                            value={person && person.name}
                        />

                        <TextField
                            label={id ? "Alterar Senha" : "Senha"}
                            {...register("password")}
                            type={"password"}
                            required={!id}
                        />

                    </div>

                </BasicGridContainerForm>
            </PrimaryForm>
            {openModalPerson && (
                <BasicModal
                    Url={'/api/person'}
                    closeModal={() => setOpenModalPerson(false)}
                    setObject={value => setValue("person", value)}
                />
            )}
        </>
    );
}

export default BasedFormUser