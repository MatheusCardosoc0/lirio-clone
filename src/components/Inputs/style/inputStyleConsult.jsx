import styled from 'styled-components';

export const InputStyleConsult = styled.div`
  width: 100%;
  max-width: ${(props) => (props.$isLarge ? "50%" : "200px")};
  background-color: #4230e9;
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  gap: 2px;
  position: relative;
  padding-top: 24px;
  
  span{
    text-align: start;
    width: 100%;
    padding-left: 8px;
    cursor: pointer;
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
    background-color: #f77700;
    padding: 6px;
    align-items: center;

    top: 10%;
    right: 1%;
    svg{
      font-size: 2.4rem;
    }
  }
`;
