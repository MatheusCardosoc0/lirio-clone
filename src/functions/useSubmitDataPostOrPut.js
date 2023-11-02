import { useNavigate } from 'react-router-dom';
import { api } from '../libs/api';
import toast from 'react-hot-toast';

const useSubmitDataPostOrPut = (urlApi, urlReturn, id) => {
    const navigate = useNavigate();

    async function handleSubmit(event, data, message) {
        event.preventDefault();

        console.log(data, id)

        try {
            let response
            if (id) {
                response = await api.put(`${urlApi}${id}`, data);
                toast.success(message ?? "Alterado")
            } else {
                response = await api.post(urlApi, data);

                if (response.data && response.data.token) {
                    localStorage.setItem('authToken', response.data.token)
                }
                toast.success(message ?? "Registrado!")
            }

            navigate(urlReturn);
        } catch (error) {
            alert('Error');
            console.log(error);
        }
    }

    return handleSubmit;
};

export default useSubmitDataPostOrPut;
