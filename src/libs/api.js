import axios from "axios";

export const api = axios.create({
    // baseURL: 'https://localhost:7221/'
    baseURL: 'https://erpwebapitest.azurewebsites.net/'
})