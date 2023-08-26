import { useDispatch, useSelector } from 'react-redux';
import LateralMenu from './components/Layout/LateralMenu';
import { FaArrowRight } from 'react-icons/fa'
import { toggleMenu } from './redux/actions/menuActions';
import Header from './components/Layout/Header';
import Container from './components/Layout/Container';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';


function App() {

  const OpenButton = styled.button`
    position: fixed;
    top: 50%;
    left: 1%;
    transform: translateY(-50%);

    border-radius: 100%;
    background-color: #5e9cf8;
    padding: 12px;
    box-shadow: 1px 1px 8px #00000068;
    color: white;

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



  const menuState = useSelector(state => state.menu.isOpen)
  const dispatch = useDispatch()

  return (
    <MainContainer>
      <Header />
      {menuState && <LateralMenu />}
      {!menuState && (
        <OpenButton
          onClick={() => dispatch(toggleMenu())}
        >
          <FaArrowRight />
        </OpenButton>
      )}
      <Container>
        <Outlet />
      </Container>
    </MainContainer>
  );
}

export default App;
