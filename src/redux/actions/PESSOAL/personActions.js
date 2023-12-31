export const SET_PERSON_DATA = 'SET_PERSON_DATA';
export const UPDATE_PERSON_FIELD = 'UPDATE_PERSON_FIELD'
export const CLEAR_PERSON_DATA = 'CLEAR_PERSON_DATA'

export const setData = (data) => {
    return {
        type: SET_PERSON_DATA,
        payload: data,
    };
};

export const updatePersonField = (fieldName, value) => {
    return {
        type: UPDATE_PERSON_FIELD,
        payload: { fieldName, value }
    };
};

export const updatePersonData = (personData) => {
    return {
        type: SET_PERSON_DATA,
        payload: personData
    };
};

export const clearPersonData = () => {
    return {
        type: CLEAR_PERSON_DATA
    }
}