import { useDispatch, useSelector } from 'react-redux';
import LateralMenu from './components/LateralMenu';
import { CloseButton } from './components/LateralMenu/LateralMenuStyles';
import { OpenButton } from './styles/buttons';
import { FaArrowRight } from 'react-icons/fa'
import { toggleMenu } from './redux/actions/menuActions';



function App() {

  const menuState = useSelector(state => state.menu.isOpen)
  const dispatch = useDispatch()

  return (
    <div className="App">
      {menuState && <LateralMenu />}
      {!menuState && (
        <OpenButton
          onClick={() => dispatch(toggleMenu())}
        >
          <FaArrowRight />
        </OpenButton>
      )}
    </div>
  );
}

export default App;
