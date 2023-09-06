import { styled } from "styled-components";

const OptionsContainer = styled.div`
  width: 90%;
  max-width: 90%;
  overflow-x: auto;
  padding: 4px;
  overflow-y: hidden;

  display: flex;
  gap: 8px;
`

const OptionButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: transparent;

  &:hover{
    scale: 1.4;
  }
    
  svg{
    font-size: 4rem;
    color: ${props => props.$color} ;
  }
`

export {
    OptionButton,
    OptionsContainer
}