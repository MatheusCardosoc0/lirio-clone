import { combineReducers } from 'redux';
import menuReducer from './reducers/menuReducer';
import personReducer from './reducers/PESSOAL/personReducers';

const rootReducer = combineReducers({
    menu: menuReducer,
    pessoal: personReducer
});

export default rootReducer;