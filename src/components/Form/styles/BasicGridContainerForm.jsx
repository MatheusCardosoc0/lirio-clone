import { styled } from "styled-components";

export const BasicGridContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px;
  width: 100%;
  max-width: 720px;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: row;
    gap: 4px;
    width: 100%;
  }
`