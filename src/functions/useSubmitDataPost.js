import { useNavigate } from "react-router-dom";
import { api } from "../libs/api";

export const useSubmitDataPost = (url) => {
    const navigate = useNavigate();

    const handleSubmit = async (event, returnUrl, data) => {
        event.preventDefault();
        try {
            await api.post(url, data);
            alert('Ok');
            navigate(returnUrl)
        } catch (error) {
            alert('Error');
            console.log(error);
        }
    };

    return handleSubmit;
};