import { styled } from "styled-components";

const Box = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #dadaf7;
  box-shadow: 0px 0px 2px black;

  @media (min-width: 768px) {
    width: 90%;
    margin-left: 10%;
  }
`

const NamePage = styled.h2`
   width: 100%;
   padding: 12px;
   background-color: #423ffa;
   color: white;
   margin-top: 0;

   font-size: 3rem;
   font-weight: black;
`

const ContentContainer = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    height: 80vh;
    width: 100%;
`

export {
  Box,
  NamePage,
  ContentContainer
}