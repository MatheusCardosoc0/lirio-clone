import styled from 'styled-components';

export const InputStyleConsult = styled.div`
  width: 100%;
  max-width: ${(props) => (props.$isLarge ? "100%" : "200px")};
  background-color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  gap: 2px;
  position: relative;
  padding-top: 24px;

  input {
    border: none;
    padding: 6px;
    width: 100%;
    height: 100%;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }

  label {
    font-weight: bolder;
    position: absolute;
    top: 0px;
    transition: all;
    transition-duration: 0.5s;
    font-size: 2.4rem;
    padding-left: 8px;
  }

  &:focus-within label {
    transform: scale(0.7);
    top: -2px;
  }

  button {
    border-radius: 100%;
    position: absolute;
    color: white;
    background-color: #4f3dec;
    padding: 6px;

    top: 20%;
    right: 1%;
    svg{
      font-size: 2.4rem;
     
    }
  }
`;
