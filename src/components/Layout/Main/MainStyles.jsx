import { styled } from "styled-components"


const OpenButton = styled.button`
    position: fixed;
    top: 12%;
    right: 1%;
    transform: translateY(-50%);
    z-index: 100;

    border-radius: 100%;
    background-color: #5e9cf8;
    padding: 12px;
    box-shadow: 1px 1px 8px #00000068;
    color: white;

    @media (min-width: 768px) {
        top: 50%;
        transform: scaleX(-1);
        left: 1%;
        right: auto;
    }

    svg{
        font-size: 3rem;
    }
`

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow: hidden;

    background-color: #ffffff;
    display: flex;
    flex-direction: column;
`

export {
    MainContainer,
    OpenButton
}