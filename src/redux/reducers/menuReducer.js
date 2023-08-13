import { TOGGLE_MENU } from '../actions/menuActions';

const initialState = {
    isOpen: false
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
};

export default menuReducer;
