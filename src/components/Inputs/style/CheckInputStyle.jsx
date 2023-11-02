import styled from "styled-components";

const CheckInputStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 4px;

  div{
    display: flex;
    gap: 8px;
    font-size: 2rem;
    margin-right: 8px;

    align-items: start;
    border: solid 0.2px #00000060;
    padding: 4px;
    background-color: #ffffff;
    color: black;
    box-shadow: 1px 1px 2px black;

    label{
        font-weight: bold;
    }

    span{
        padding: 2px;
        border: 1px solid black;
        border-radius: 100%;

        display: flex;
        align-items: center;
        background-color: #f6ff00;
        color: #0c0c0c;
        cursor: pointer;
    }
  }
`

export {
  CheckInputStyle
}