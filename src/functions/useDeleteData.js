import { useNavigate } from 'react-router-dom';
import { api } from '../libs/api';

const useDeleteData = (urlApi, id, urlReturn) => {
    const navigate = useNavigate();

    const deleteData = async () => {
        try {
            await api.delete(`${urlApi}${id}`);
            alert('Pessoa removida');
            navigate(urlReturn);
        } catch (error) {
            console.log(error);
        }
    };

    return deleteData;
};

export default useDeleteData;
