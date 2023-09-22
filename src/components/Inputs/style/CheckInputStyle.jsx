import styled from "styled-components";

const CheckInputStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 4px;

  div{
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 2rem;
    margin-right: 8px;

    align-items: start;
    border: solid 0.2px #00000060;
    padding: 2px;
    border-radius: 10%;
    background-color: #944cf3;
    color: white;
    box-shadow: 0px 0px 4px black;

    label{
        font-weight: bold;
    }

    span{
        padding: 2px;
        border: 1px solid black;
        border-radius: 20%;

        display: flex;
        align-items: center;
        background-color: #ff8902;
        color: #0c0c0c;
        cursor: pointer;
    }
  }
`

export {
    CheckInputStyle
}