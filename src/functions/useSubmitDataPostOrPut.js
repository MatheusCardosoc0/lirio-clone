import { useNavigate } from 'react-router-dom';
import { api } from '../libs/api';

const useSubmitDataPostOrPut = (urlApi, urlReturn, id) => {
    const navigate = useNavigate();

    async function handleSubmit(event, data) {
        event.preventDefault();

        try {
            if (id) {
                await api.put(`${urlApi}${id}`, data);
            } else {
                await api.post(urlApi, data);
            }

            alert('Ok');

            navigate(urlReturn);
        } catch (error) {
            alert('Error');
            console.log(error);
        }
    }

    return handleSubmit;
};

export default useSubmitDataPostOrPut;