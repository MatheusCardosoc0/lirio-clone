import { useEffect } from 'react';
import { api } from '../../libs/api';
import toast from 'react-hot-toast';

export const useGetDataList = (setDataFilter, setData, url, setIsLoading) => {

    useEffect(() => {
        const fetchData = async () => {
            if (setIsLoading) {
                setIsLoading(true)
            }
            try {
                const response = await api.get(url);
                setData(response.data);
                setDataFilter(response.data);
            } catch (error) {
                toast.error("Não foi possivel pegar os dados da api")
                console.error('Error:', error);
            }
            if (setIsLoading) {
                setIsLoading(false)
            }
        };

        fetchData();
    }, [setData, setDataFilter, url]);
};
