import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginForm = styled.form`
  display: flex ;
  flex-direction: column;
  background-color: #423ffa;
  width: 320px;
  gap: 12px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 1px 1px 1px black;
  align-items: center;

  img{
    width: 128px;
  }
`


export {
    LoginContainer,
    LoginForm
}