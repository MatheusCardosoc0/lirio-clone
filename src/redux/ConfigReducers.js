import { combineReducers } from 'redux';
import personReducer from './reducers/PESSOAL/personReducers';
import currentUserReducer from './reducers/currentUserReducer';

const rootReducer = combineReducers({
    person: personReducer,
    user: currentUserReducer
});

export default rootReducer;