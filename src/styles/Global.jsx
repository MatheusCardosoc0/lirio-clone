import { styled } from "styled-components";


const LogoContainer = styled.img`
    width: 90%;
    height: 90%;
    margin-inline: auto;

    @media (min-width: 768px){
        width: 40%;
        height: 40%;
    }
`

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`


export {
    LogoContainer,
    MainContainer
}