import styled from 'styled-components';

export const InputStyle1 = styled.div`
  width: 100%;
  max-width: ${(props) => (props.max ? "100%" : "200px")};
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

  // Quando InputStyle1 ou seus filhos (neste caso, o input) estão focados, a fonte da label é diminuída.
  &:focus-within label {
    transform: scale(0.7);
    top: -2px;
  }
`;
