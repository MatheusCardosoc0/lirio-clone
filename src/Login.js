import React, { useState } from 'react'
import { BoxLoginContainer, LoginContainer, LoginForm, LogoContainer } from './components/Auth'
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
            <BoxLoginContainer>
                <LogoContainer>
                    <img src={Logo} alt='logo' />
                </LogoContainer>
                <LoginForm
                    onSubmit={e => handleSubmit(e, dataForLogin, "Login feito com sucesso")}
                >
                    <h3>
                        Faça seu Login
                    </h3>
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
                        type={"password"}
                        $isLarge
                    />

                    <ButtonStyle1
                        $color={"linear-gradient(to bottom, #ccff33, #008000)"}
                    >
                        Entrar
                    </ButtonStyle1>
                </LoginForm>
            </BoxLoginContainer>
        </LoginContainer>
    )
}

export default Login