import styled from "styled-components";

export const BasicModalStyle = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 32px;

  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px ) {
    max-width: 1000px;
    height: 90%;
  }

  div:nth-child(1){
    position: relative;
    width: 100%;
    height: 100%;
  }
`