import Navbar from './components/Layout/Navbar';
import Container from './components/Layout/Container';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './components/Layout/Main/MainStyles';

function App() {

  return (
    <MainContainer>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </MainContainer>
  );
}

export default App;
