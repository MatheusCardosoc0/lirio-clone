import { useNavigate } from 'react-router-dom';
import { api } from '../libs/api';
import toast from 'react-hot-toast';

const useSubmitDataPostOrPut = (urlApi, urlReturn, id) => {
    const navigate = useNavigate();

    async function handleSubmit(data, e = null, messageSuccess, messageError, messageSuccessChange) {
        if (e) {
            e.preventDefault()
        }
        try {
            let response
            if (id) {
                response = await api.put(`${urlApi}${id}`, data);
                toast.success(messageSuccessChange ?? "Alterado")
            } else {
                response = await api.post(urlApi, data);

                if (response.data && response.data.token) {
                    localStorage.setItem('authToken', response.data.token)
                }
                toast.success(messageSuccess ?? "Registrado!")
            }

            navigate(urlReturn);
        } catch (error) {
            toast.error(messageError ?? 'Não foi possivel fazer o registro')
            console.log(error);
        }
    }

    return handleSubmit;
};

export default useSubmitDataPostOrPut;
