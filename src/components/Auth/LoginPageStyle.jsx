import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginForm = styled.form`
  display: flex ;
  flex-direction: column;
  width: 320px;
  gap: 12px;
  padding: 20px;
  align-items: start;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  border: 2px solid black;
  box-shadow: 1px 1px 2px black;
  height: 380px;
  

  h3{
    font-weight: bold;
    font-size: 3.6rem;
  }

  div{
    display: flex;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: black;
  height: 380px;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;

  svg{
    font-size: 20rem;
    color: white;
  }
`

const BoxLoginContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  
  align-items: center;
`


export {
  LoginContainer,
  LoginForm,
  LogoContainer,
  BoxLoginContainer
}