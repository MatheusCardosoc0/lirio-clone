import styled from "styled-components";

export const CloseButton = styled.button`
  border-radius: 100%;
  position: absolute;
  width: 80px;
  height: 80px;
  padding: 4px;
  background-color: red;
  border-right: 4px solid;
  border-bottom: 4px solid;
  border-color: #0000003a;
  color: white;
  display: flex;
  align-items: center;  
  font-size: 6rem;  
  top: -4%;
  right: 1%;

  &:hover{
    border: none;
  }
`