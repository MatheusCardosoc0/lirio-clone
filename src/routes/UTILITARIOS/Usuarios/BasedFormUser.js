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
        DeleteUser,
        onSubmit,
        openModalPerson,
        setOpenModalPerson,
        urlReturn,
        userData,
        setUserData
    } = useBasedFunctionUsers(id)


    return (
        <>
            <PrimaryForm
                urlCancel={urlReturn}
                removeFunction={id ? () => DeleteUser() : null}
                onSubmit={e => onSubmit(e)}
            >
                <BasicGridContainerForm>
                    <TextField
                        label={"Nome"}
                        onChange={e => setUserData({ ...userData, name: e.target.value })}
                        value={userData.name}
                        required
                    />

                    <div>
                        <ConsultInput
                            $isLarge
                            label={"Pessoas"}
                            onChange={value => setUserData({ ...userData, person: value })}
                            openModal={() => setOpenModalPerson(true)}
                            title={"Consultar pessoas cadastradas"}
                            value={userData.person && userData.person.name}
                        />

                        <TextField
                            label={id ? "Alterar Senha" : "Senha"}
                            onChange={e => setUserData({ ...userData, password: e.target.value })}
                            type={"password"}
                            required={!id}
                            value={userData.password}
                        />

                    </div>

                </BasicGridContainerForm>
            </PrimaryForm>
            {openModalPerson && (
                <BasicModal
                    Url={'/api/person'}
                    closeModal={() => setOpenModalPerson(false)}
                    setObject={value => setUserData({ ...userData, person: value })}
                />
            )}
        </>
    );
}

export default BasedFormUser