import { useNavigate } from 'react-router-dom';
import { api } from '../libs/api';

const useSubmitDataPostOrPut = (urlApi, urlReturn, id) => {
    const navigate = useNavigate();

    async function handleSubmit(event, data) {
        event.preventDefault();

        console.log(data, id)

        try {
            if (id) {
                await api.put(`${urlApi}${id}`, data);
            } else {
                const response = await api.post(urlApi, data);
                console.log(response.data)
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
