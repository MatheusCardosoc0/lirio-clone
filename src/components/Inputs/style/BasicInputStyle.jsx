import styled from 'styled-components';

export const BasicInputStyle = styled.div`
  width: 100%;
  background-color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  border-radius: 6px;
  gap: 2px;
  position: relative;
  padding-top: 24px;
  max-height: 28px;
  box-shadow: 1px 1px 2px black;
  border: 2px solid;
  border-color: #000000;

  input {
    border: none;
    padding: 6px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 2rem;

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
    left: 1px;
    transform-origin: 0%;
    color: black;
  }

  &:focus-within label {
    transform: scale(0.7);
    top: -2px;
  }
`;
