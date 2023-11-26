import { CURRENT_USER } from '../actions/CurrentUserAction'

const initialState = {
    userName: '',
    urlImage: ''
};

const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default currentUserReducer;
