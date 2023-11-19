import { ADD_NAV_SHORTCUT } from '../actions/ShortCutsNavActions'

const initialState = {
    shortcuts: []
}

const shortcutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAV_SHORTCUT:
            const shortcutIndex = state.shortcuts.findIndex(
                shortcut => shortcut.name === action.payload.name
            );

            let updatedShortcuts = [...state.shortcuts];

            if (shortcutIndex !== -1) {
                updatedShortcuts.splice(shortcutIndex, 1);
            }

            updatedShortcuts.unshift(action.payload);

            if (updatedShortcuts.length > 7) {
                updatedShortcuts = updatedShortcuts.slice(0, 7);
            }

            return {
                ...state,
                shortcuts: updatedShortcuts
            };

        default:
            return state;
    }
};

export default shortcutReducer;
