import { styled } from "styled-components";

const PrimaryFormStyle = styled.form`
  width: 90%;
  max-width: 700px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-inline: auto;
  border-radius: 12px;
  overflow: hidden;
  padding-bottom: 20px;

  header{
    padding-left: 16px;
    font-size: 2.4rem;
    font-weight: bold;

    text-align: start;  
    color: #000000;
  }
  main{
    padding: 4px;
  }
  footer{
    padding: 8px;
    gap: 12px;
    
    display: flex;
    align-items: start;
    justify-content: start;
  }
`

export {
  PrimaryFormStyle
}