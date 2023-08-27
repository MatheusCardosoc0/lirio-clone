import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import personReducer from './PESSOAL';

const rootReducer = combineReducers({
    menu: menuReducer,
    pessoal: personReducer
});

export default rootReducer;
