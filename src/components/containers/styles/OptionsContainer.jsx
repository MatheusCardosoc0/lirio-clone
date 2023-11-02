import { styled } from "styled-components";

const OptionsContainer = styled.div`
  width: 90%;
  max-width: 90%;
  overflow-x: auto;
  padding: 4px;
  overflow-y: hidden;
  position: fixed;
  top: 19%;

  display: flex;
  gap: 8px;
`

const OptionButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 100%;
  background-color: ${props => props.$color};
  align-items: center;
  border-right: 4px solid;
  border-bottom: 4px solid;
  border-color: ${props => `rgba(0, 0, 0, 0.167)`};

  &:hover{
    border: none;
  }
    
  svg{
    font-size: 4rem;
    color:  white;
  }
`

export {
  OptionButton,
  OptionsContainer
}