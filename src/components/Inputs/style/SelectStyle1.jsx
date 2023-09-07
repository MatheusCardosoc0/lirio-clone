import styled from 'styled-components';

export const SelectStyle1 = styled.div`
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

  select {
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
`;
