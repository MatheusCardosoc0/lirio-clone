import { useEffect } from 'react';
import { api } from '../../libs/api';

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
                console.error('Error:', error);
            }
            if (setIsLoading) {
                setIsLoading(false)
            }
        };

        fetchData();
    }, [setData, setDataFilter, url]);
};
