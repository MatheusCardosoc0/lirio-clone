import { CLEAR_PERSON_DATA, SET_PERSON_DATA, UPDATE_PERSON_FIELD } from "../../actions/PESSOAL/personActions"

const initialState = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    age: 0,
    cpf: '',
    address: '',
    birthDate: '',
    ibge: '',
    razao: '',
    inscricaoEstadual: '',
    cep: '',
    urlImage: '',
    isBlocked: false,
    maritalStatus: '',
    habilities: '',
    description: '',
    group: null,
    city: null
};

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSON_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case UPDATE_PERSON_FIELD:
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value,
            };
        case CLEAR_PERSON_DATA:
            return initialState
        default:
            return state;
    }
};

export default personReducer;
