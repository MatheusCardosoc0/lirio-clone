import { styled } from "styled-components";

export const ButtonStyle1 = styled.button`
  width: 100%;
  max-width: ${props => props.$max_width || '100%'};
  padding: 8px;
  font-weight: bold;
  color: white;
  border-radius: 4px;
  background: ${props => props.$color || 'linear-gradient(to bottom, #0077ff, #03009a)'};
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 6px;
  border-right: 4px solid;
  border-bottom: 4px solid;
  border-color: ${props => `rgba(0, 0, 0, 0.435)`};
  justify-content: center;
  box-shadow: 1px 1px 2px black;
  text-shadow: 1px 1px 1px black;
  height: 56px;

  &:hover{
    border: none ;
  }

  svg{
    font-size: 4rem;
    filter: drop-shadow(1px 1px 1px black);
  }
`