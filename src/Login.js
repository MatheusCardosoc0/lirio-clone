import React from 'react'
import { BoxLoginContainer, LoginContainer, LoginForm, LogoContainer } from './components/Auth'
import useSubmitDataPostOrPut from './functions/useSubmitDataPostOrPut'
import { Button, TextField } from '@mui/material'
import { CgShapeTriangle } from 'react-icons/cg'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit } = useForm({
    });

    const submitData = useSubmitDataPostOrPut("/api/SignIn/", "/Dashboard");

    const onSubmit = (data) => {
        submitData(data, null, "Login feito com sucesso", "Senha ou usuário invalidos");
    };

    return (
        <LoginContainer>
            <BoxLoginContainer>
                <LogoContainer>
                    <CgShapeTriangle />
                </LogoContainer>
                <LoginForm
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h3>
                        Faça seu Login
                    </h3>
                    <TextField
                        label="Usuário"
                        {...register("username")}
                        required
                    />
                    <TextField
                        label="Senha"
                        type="password"
                        {...register("password")}
                        required
                    />

                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Entrar
                    </Button>
                </LoginForm>
            </BoxLoginContainer>
        </LoginContainer>
    )
}

export default Login