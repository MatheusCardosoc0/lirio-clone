import styled from "styled-components";

const CheckInputStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 4px;

  button{
    display: flex;
    gap: 8px;
    font-size: 2rem;
    margin-right: 8px;

    align-items: center;
    border: solid 2px #0000005c;
    padding: 4px;
    background-image: linear-gradient(to bottom, #494949, #000000);
    color: black;
    cursor: pointer;

    label{
        font-weight: bold;
        color: white;
        text-shadow: 1px 1px 2px black;
        cursor: pointer;
    }

    span{

        display: flex;
        align-items: center;
        color: #ffffff;
        cursor: pointer;
    }

    svg{
      font-size: 4rem;
      filter: drop-shadow(1px 1px 1px black);
    }
  }
`

export {
  CheckInputStyle
}