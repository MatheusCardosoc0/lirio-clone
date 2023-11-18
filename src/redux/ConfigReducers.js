import { combineReducers } from 'redux';
import personReducer from './reducers/PESSOAL/personReducers';
import currentUserReducer from './reducers/currentUserReducer';
import shortcutReducer from './reducers/navShortcutsReducer';

const rootReducer = combineReducers({
    person: personReducer,
    shortcutsManagement: shortcutReducer,
    user: currentUserReducer
});

export default rootReducer;