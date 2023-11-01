import { useNavigate } from 'react-router-dom';
import { api } from '../libs/api';

const useSubmitDataPostOrPut = (urlApi, urlReturn, id) => {
    const navigate = useNavigate();

    async function handleSubmit(event, data) {
        event.preventDefault();

        console.log(data, id)

        try {
            let response
            if (id) {
                response = await api.put(`${urlApi}${id}`, data);
            } else {
                response = await api.post(urlApi, data);

                if (response.data && response.data.token) {
                    localStorage.setItem('authToken', response.data.token)
                }
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
