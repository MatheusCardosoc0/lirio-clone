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
  border-left: 4px solid yellowgreen;
  

  h3{
    font-weight: bold;
    font-size: 3.6rem;
    color: white;
    text-shadow: 1px 1px 2px black;
  }

  div{
    display: flex;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;

  img{
    width: 240px;
  }
`

const BoxLoginContainer = styled.div`
  display: flex;
  background-image: linear-gradient(to top right, #32057a, #4205de, #710080);
  align-items: end;
  border-radius: 20px;
  box-shadow: 1px 1px 4px black;
  border-right: 8px solid;
  border-bottom: 8px solid;
  border-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  overflow: hidden;
`


export {
  LoginContainer,
  LoginForm,
  LogoContainer,
  BoxLoginContainer
}