import { combineReducers } from 'redux';
import menuReducer from './reducers/menuReducer';
import personReducer from './reducers/PESSOAL/personReducers';
import currentUserReducer from './reducers/currentUserReducer';

const rootReducer = combineReducers({
    menu: menuReducer,
    pessoal: personReducer,
    user: currentUserReducer
});

export default rootReducer;