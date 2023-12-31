import { styled } from "styled-components";

export const BasicSearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding-top: 52px;

  @media (min-width: 1024px) {
    justify-content: start;
    align-items: start;
    padding-left: 96px;
  }
`