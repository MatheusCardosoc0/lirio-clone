import axios from "axios";

export const api = axios.create({
    //baseURL: 'https://localhost:7221/'
    baseURL: 'https://erpwebapitest.azurewebsites.net/'
})

export function setupAuthInterceptor(token) {
    api.interceptors.request.use(
        config => {
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
}