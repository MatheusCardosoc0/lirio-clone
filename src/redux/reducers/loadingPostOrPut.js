import { LOADING_POST_OR_PUT } from "../actions/loadingPostOrPut";

const initialState = {
    isLoading: false
}

const loadingPostOrPutReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_POST_OR_PUT:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default loadingPostOrPutReducer;