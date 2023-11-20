import { CLEAR_PRODUCT_DATA, SET_PRODUCT_DATA, UPDATE_PRODUCT_FIELD } from "../../actions/MATERIAIS/productAction";

const initialState = {
    id: 0,
    name: '',
    description: '',
    price: '',
    group: null
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case UPDATE_PRODUCT_FIELD:
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value,
            };
        case CLEAR_PRODUCT_DATA:
            return initialState
        default:
            return state;
    }
};

export default productReducer;
