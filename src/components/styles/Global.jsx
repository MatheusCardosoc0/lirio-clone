import { styled } from "styled-components";


const LogoContainer = styled.img`
    width: 100%;
    height: 100%;
    margin-inline: auto;

    @media (max-width: 780px){
        width: 80%;
        height: 80%;
    }
`


export {
    LogoContainer
}