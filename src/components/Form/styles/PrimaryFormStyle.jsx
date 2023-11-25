import { styled } from "styled-components";

const PrimaryFormStyle = styled.form`
  width: 100%;
  background-color: transparent;
  display: flex;
  position: relative;
  margin-inline: auto;
  border-radius: 12px;
  overflow: hidden;
  padding-bottom: 20px;
  padding-top: 48px;
  justify-content: space-evenly;
`

const ActionsContainer = styled.div`
  gap: 4px;
  width: 164px;
    
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`

const OptionsForSectionsFormContainer = styled.ul`
  width: 164px;

  li{
    text-decoration: none;
    background: linear-gradient(to top, #737373, black);
    color: white;
    font-size: 2rem;
    padding: 6px;
    cursor: pointer;

    &:hover{
      background: #000980;
    }
  }
`

export {
  ActionsContainer,
  PrimaryFormStyle,
  OptionsForSectionsFormContainer
}