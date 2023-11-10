import React, { useState } from 'react'
import { BoxLoginContainer, LoginContainer, LoginForm, LogoContainer } from './components/Auth'
import useSubmitDataPostOrPut from './functions/useSubmitDataPostOrPut'
import { Button, TextField } from '@mui/material'
import { CgShapeTriangle } from 'react-icons/cg'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
    username: z.string().min(1, "O nome de usuário é obrigatório"),
    password: z.string().min(1, "A senha é obrigatória")
});

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });

    const submitData = useSubmitDataPostOrPut("/api/SignIn/", "/Dashboard");

    const onSubmit = (data) => {
        submitData(data, "Login feito com sucesso", "Senha ou usuário invalidos");
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
                        variant="outlined"
                        {...register("username")}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                    <TextField
                        label="Senha"
                        variant="outlined"
                        type="password"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
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