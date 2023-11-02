import { useDispatch, useSelector } from 'react-redux';
import LateralMenu from './components/Layout/LateralMenu';
import { FaArrowLeft } from 'react-icons/fa'
import { toggleMenu } from './redux/actions/menuActions';
import Navbar from './components/Layout/Navbar';
import Container from './components/Layout/Container';
import { Outlet } from 'react-router-dom';
import { MainContainer, OpenButton } from './components/Layout/Main/MainStyles';


function App() {

  const menuState = useSelector(state => state.menu.isOpen)
  const dispatch = useDispatch()

  return (
    <MainContainer>
      <Navbar />
      {menuState && <LateralMenu />}
      {!menuState && (
        <OpenButton
          title='Abrir menu lateral'
          onClick={() => dispatch(toggleMenu())}
        >
          <FaArrowLeft />
        </OpenButton>
      )}
      <Container>
        <Outlet />
      </Container>
    </MainContainer>
  );
}

export default App;
