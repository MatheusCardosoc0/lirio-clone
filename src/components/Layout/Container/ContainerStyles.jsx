import { styled } from "styled-components";

const SeparateContainer = styled.section`
  display: flex;
  width: 100%;
`

const Box = styled.div`
  width: 88%;
  height: 100vh;
  background-color: #ffffff;
`

const NamePage = styled.div`
   width: 100%;
   background: #ffffff;
   color: #000000;
   margin-top: 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-color: rgba(0, 0, 0, 0.249);
   height: 80px;
   box-shadow: 0px 4px 1px black;
  

   h2{
    font-size: 4rem;
    font-weight: bold;
    padding-left: 20px;
   }
`

const ContentContainer = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    padding-top: 20px;
    height: 80vh;
    width: 100%;

    &::-webkit-scrollbar {
    height: 8px; 
    width: 8px; 
    background-color: #000000; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000; 
    
  }

  &::-webkit-scrollbar-track {
    background-color: #000000; 
  }

  scrollbar-width: thin;
  scrollbar-color: #000000 #F5F5F5; 
`

const UserBox = styled.span`
  display: flex;
  gap: 4px;
  padding-right: 20px;

  h3{
    font-size: 2rem;
    color: color;
  }

  div{
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: #000000;
  }
`

const LateralMenu = styled.div`
  width: 14%;
  height: 100%;
  min-height: 100vh;
  background-color: orange;
`

export {
  Box,
  SeparateContainer,
  NamePage,
  ContentContainer,
  LateralMenu,
  UserBox
}