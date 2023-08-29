import { styled } from "styled-components";

const FormStyle1 = styled.form`
  width: 90%;
  max-width: 700px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-inline: auto;
  gap: 1px;
  border-radius: 12px;
  overflow: hidden;

  header{
    padding-left: 16px;
    font-size: 2.4rem;
    font-weight: bold;

    text-align: start;
    background-color: #ff7300;
    color: white;
  }
  main{
    padding: 8px;
  }
  footer{
    background-color: #ff7300;
    padding: 8px;
    
    display: flex;
    align-items: start;
    justify-content: start;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;

  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: red;
  color: white;
  font-size: 3rem;
  display: flex;
  align-items: center;
`

export {
    FormStyle1,
    CloseButton
}