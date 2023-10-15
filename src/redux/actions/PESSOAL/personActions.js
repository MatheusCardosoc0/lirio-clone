export const SEARCH_TERM_PERSON_NAME = 'SEARCH_TERM_PERSON_NAME'
export const SEARCH_TERM_PERSON_ID = 'SEARCH_TERM_PERSON_ID'
export const SET_DATA = 'SET_DATA';

export const SearchTermPersonName = (term) => ({
    type: SEARCH_TERM_PERSON_NAME,
    payload: term
})

export const SearchTermPersonId = (term) => ({
    type: SEARCH_TERM_PERSON_ID,
    payload: term
})

export const setData = (data) => {
    return {
        type: SET_DATA,
        payload: data,
    };
};
