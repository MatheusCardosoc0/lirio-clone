import { useNavigate } from "react-router-dom";
import { api } from "../libs/api";

export const useSubmitDataPost = (urlApi, urlReturn) => {
    const navigate = useNavigate();

    async function handleSubmit(event, data) {
        event.preventDefault();
        try {
            await api.post(urlApi, data);
            alert('Ok');
            navigate(urlReturn)
        } catch (error) {
            alert('Error');
            console.log(error);
        }
    };

    return handleSubmit;
};