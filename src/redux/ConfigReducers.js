import { combineReducers } from 'redux';
import personReducer from './reducers/PESSOAL/personReducers';
import currentUserReducer from './reducers/currentUserReducer';
import shortcutReducer from './reducers/navShortcutsReducer';
import productReducer from './reducers/MATERIAIS/productReducer';

const rootReducer = combineReducers({
    person: personReducer,
    product: productReducer,
    shortcutsManagement: shortcutReducer,
    user: currentUserReducer
});

export default rootReducer;