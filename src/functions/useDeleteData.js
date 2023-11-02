import { useNavigate } from 'react-router-dom';
import { api } from '../libs/api';
import toast from 'react-hot-toast';

const useDeleteData = (urlApi, id, urlReturn) => {
    const navigate = useNavigate();

    const deleteData = async () => {
        try {
            await api.delete(`${urlApi}${id}`);
            toast.success('Removido');
            navigate(urlReturn);
        } catch (error) {
            console.log(error);
        }
    };

    return deleteData;
};

export default useDeleteData;
