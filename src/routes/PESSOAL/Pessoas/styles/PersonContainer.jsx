import { styled } from "styled-components";

export const PersonContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    justify-content: start;
    align-items: start;
    padding-left: 32px;
  }
`