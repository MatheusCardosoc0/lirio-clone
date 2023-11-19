import { styled } from 'styled-components';

const LateralMenuContainer = styled.section`
  width: 12%;
  background: black ;
  height: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;

  svg{
    font-size: 16rem;
    color: white;
  }
`

const ShortcutsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;

  button{
    padding-block: 8px;
    font-weight: bold;
    width: 100%;
    max-width: 90%;
    font-size: 2rem;
    background: #ffffff;
    padding-inline: 4px;
    color: #000000;
    text-align: center;

    &:hover{
      filter: brightness(80%);
    }
  }
`


export {
  LateralMenuContainer,
  ShortcutsContainer
}
