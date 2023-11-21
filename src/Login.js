import React, { useState } from 'react'
import { BoxLoginContainer, LoginContainer, LoginForm, LogoContainer } from './components/Auth'
import useSubmitDataPostOrPut from './functions/Api/useSubmitDataPostOrPut'
import { Button, TextField } from '@mui/material'
import { CgShapeTriangle } from 'react-icons/cg'

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const submitData = useSubmitDataPostOrPut("/api/SignIn/", "/Dashboard");

    const onSubmit = (e) => {
        e.preventDefault()

        submitData(loginData, null, "Login feito com sucesso", "Senha ou usuário invalidos");
    };

    return (
        <LoginContainer>
            <BoxLoginContainer>
                <LogoContainer>
                    <CgShapeTriangle />
                </LogoContainer>
                <LoginForm
                    onSubmit={e => onSubmit(e)}
                >
                    <h3>
                        Faça seu Login
                    </h3>
                    <TextField
                        label="Usuário"
                        onChange={e => setLoginData({ ...loginData, username: e.target.value })}
                        value={loginData.username}
                        required
                    />
                    <TextField
                        label="Senha"
                        type="password"
                        onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                        value={loginData.password}
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