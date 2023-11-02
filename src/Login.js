import React, { useState } from 'react'
import { LoginContainer, LoginForm } from './components/Auth'
import { BasicInput } from './components/Inputs'
import Logo from './assets/Logo.png'
import { ButtonStyle1 } from './components/Buttons'
import useSubmitDataPostOrPut from './functions/useSubmitDataPostOrPut'

const Login = () => {

    const [dataForLogin, setDataForLogin] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = useSubmitDataPostOrPut("/api/SignIn/", "/Dashboard")


    return (
        <LoginContainer>
            <LoginForm
                onSubmit={e => handleSubmit(e, dataForLogin, "Login feito com sucesso")}
            >
                <img src={Logo} alt='Logo' />
                <BasicInput
                    label={"Usuário"}
                    onChange={e => setDataForLogin({ ...dataForLogin, username: e.target.value })}
                    value={dataForLogin.username}
                    $isLarge
                />
                <BasicInput
                    onChange={e => setDataForLogin({ ...dataForLogin, password: e.target.value })}
                    value={dataForLogin.password}
                    label={"Senha"}
                    $isLarge
                />

                <ButtonStyle1
                    $color={"green"}
                >
                    Entrar
                </ButtonStyle1>
            </LoginForm>
        </LoginContainer>
    )
}

export default Login