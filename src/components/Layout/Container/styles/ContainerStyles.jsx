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
   width: 98.5%;
   padding: 12px;
   background-color: #423ffa;
   color: white;
   margin-top: 0;
   display: flex;
   align-items: center;
   justify-content: space-between;

   font-size: 3rem;
   font-weight: black;
`

const ContentContainer = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    height: 80vh;
    width: 100%;
`

const UserBox = styled.span`
  display: flex;
  gap: 4px;

  h3{
    font-size: 2rem;
    color: white;
  }

  div{
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: white;
  }
`

export {
  Box,
  NamePage,
  ContentContainer,
  UserBox
}