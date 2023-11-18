import { ADD_NAV_SHORTCUT } from '../actions/ShortCutsNavActions'

const initialState = {
    shortcuts: []
}

const shortcutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAV_SHORTCUT:
            const exists = state.shortcuts.some(
                shortcut => shortcut.name === action.payload.name
            );

            if (exists) {
                return state;
            } else {
                return {
                    ...state,
                    shortcuts: [...state.shortcuts, action.payload]
                };
            }
        default:
            return state;
    }
};

export default shortcutReducer;
