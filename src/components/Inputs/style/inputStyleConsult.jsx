import styled from 'styled-components';

export const InputStyleConsult = styled.div`
  width: 100%;
  max-width: ${(props) => (props.$isLarge ? "50%" : "200px")};
  background-image: linear-gradient(to top, #000000, #2d2d2d);
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  gap: 2px;
  position: relative;
  padding-top: 24px;
  cursor: pointer;
  overflow: hidden;
  
  span{
    text-align: start;
    width: 100%;
    padding-left: 8px;
    cursor: pointer;
    white-space: nowrap;
    filter: drop-shadow(1px 1px 1px black);
  }

  label {
    font-weight: bolder;
    position: absolute;
    top: 0px;
    transition: all;
    transition-duration: 0.5s;
    font-size: 2.4rem;
    padding-left: 8px;
    cursor: pointer;
    filter: drop-shadow(1px 1px 1px black);
  }

  &:hover {
    filter: brightness(160%);
  }

  button {
    position: absolute;
    color: white;
    padding: 6px;
    align-items: center;
    background-color: transparent;

    top: 10%;
    right: 1%;
    svg{
      font-size: 2.4rem;
      filter: drop-shadow(1px 1px 1px black);
    }
  }
`;
