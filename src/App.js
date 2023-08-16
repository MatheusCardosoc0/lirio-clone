import { useDispatch, useSelector } from 'react-redux';
import LateralMenu from './components/LateralMenu';
import { OpenButton } from './styles/buttons';
import { FaArrowRight } from 'react-icons/fa'
import { toggleMenu } from './redux/actions/menuActions';
import Header from './components/Header';
import { MainContainer } from './styles/Global';
import Container from './components/Container';
import { Outlet } from 'react-router-dom';


function App() {

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
