import { api } from "../../libs/api";

export const CURRENT_USER = 'CURRENT_USER'

export const setCurrentUser = (dada) => ({
    type: CURRENT_USER,
    payload: dada
})

export const fetchUserData = (token) => async (dispatch) => {
    try {
        const response = await api.get(`/api/SignIn/${token}`);
        const { userName, urlImage } = response.data;
        dispatch(setCurrentUser({ userName, urlImage }));
    } catch (error) {
        localStorage.removeItem("authToken");
        window.location.reload();
    }
};