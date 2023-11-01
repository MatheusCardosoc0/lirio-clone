import { CURRENT_USER } from '../actions/CurrentUserAction'

const initialState = {
    userName: '',
};

const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return {
                ...state,
                userName: action.payload
            };
        default:
            return state;
    }
};

export default currentUserReducer;
