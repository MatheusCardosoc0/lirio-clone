export const SET_PRODUCT_DATA = 'SET_PRODUCT_DATA';
export const UPDATE_PRODUCT_FIELD = 'UPDATE_PRODUCT_FIELD'
export const CLEAR_PRODUCT_DATA = 'CLEAR_PRODUCT_DATA'

export const setProductData = (data) => {
    return {
        type: SET_PRODUCT_DATA,
        payload: data,
    };
};

export const updateProductField = (fieldName, value) => {
    return {
        type: UPDATE_PRODUCT_FIELD,
        payload: { fieldName, value }
    };
};

export const updateProductData = (productData) => {
    return {
        type: SET_PRODUCT_DATA,
        payload: productData
    };
};

export const clearProductData = () => {
    return {
        type: CLEAR_PRODUCT_DATA
    }
}