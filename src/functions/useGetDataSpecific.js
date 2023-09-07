import { useState, useEffect } from 'react';
import { api } from '../libs/api';

const useGetDataSpecific = (id, urlApi, setData = {}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await api.get(`${urlApi}${id}`);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [id]);
    return { loading, error };
};

export default useGetDataSpecific;
