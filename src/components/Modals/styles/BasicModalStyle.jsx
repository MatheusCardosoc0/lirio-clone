import styled from "styled-components";

export const BasicModalStyle = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  padding-top: 40px;
  padding-left: 4px;

  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #8a82fa;
  box-shadow: 1px 1px 4px black;

  @media (min-width: 768px ) {
    max-width: 1000px;
    height: 90%;
  }

  div:nth-child(1){
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`