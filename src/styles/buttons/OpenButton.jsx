import { styled } from "styled-components";

const OpenButton = styled.button`
  position: fixed;
  top: 50%;
  left: 1%;
  transform: translateY(-50%);
  
  border-radius: 100%;
  background-color: #5e9cf8;
  padding: 12px;
  box-shadow: 1px 1px 1px black;
  color: white;

  svg{
    font-size: 3rem;
  }
`

export { OpenButton }

