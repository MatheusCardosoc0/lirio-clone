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

  a{
    padding-block: 6px;
    font-weight: bold;
    width: 100%;
    max-width: 90%;
    font-size: 2rem;
    background-color: green;
    padding-inline: 4px;
    color: white;
    text-align: center;
  }
`


export {
  LateralMenuContainer,
  ShortcutsContainer
}
