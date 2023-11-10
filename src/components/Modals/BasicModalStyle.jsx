import styled from "styled-components";

export const BasicModalStyle = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-left: 4px;

  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-image: linear-gradient(to top, #a2a2a2, #dadada);
  border: 4px solid black;

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