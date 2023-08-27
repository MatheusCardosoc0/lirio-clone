import { SEARCH_TERM_PERSON_ID, SEARCH_TERM_PERSON_NAME } from "../../actions/personActions";

const initialState = {
    searchTermName: '',
    searchTermId: ''
};

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_TERM_PERSON_NAME:
            return {
                ...state,
                searchTermName: action.payload
            };
        case SEARCH_TERM_PERSON_ID:
            return {
                ...state,
                searchTermId: action.payload
            };
        default:
            return state;
    }
};

export default personReducer;
