import { useEffect } from 'react';
import { api } from '../../libs/api';

export const useGetDataList = (setDataFilter, setData, url) => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(url);
                setData(response.data);
                setDataFilter(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [setData, setDataFilter, url]);
};
