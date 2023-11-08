import { useState } from 'react'
import { api } from '../../../libs/api';
import { calculateAge } from '../../../functions/calculateAge';
import toast from 'react-hot-toast';

const useBasedFunctionPerson = () => {
    const [data, setData] = useState({
        name: '',
        razao: '',
        email: '',
        phone: '',
        cpf: '',
        ibge: '',
        inscricaoEstadual: '',
        address: '',
        birthDate: '',
        age: 0,
        city: {},
        group: {},
        cep: '',
    });

    const [options, setOptions] = useState('PF')

    const [openModalCity, setOpenModalCity] = useState(false)
    const [openModalGroup, setOpenModalGroup] = useState(false)

    const {
        cpf,
        birthDate
    } = data

    const fetchDataCNPJ = async () => {
        if (cpf) {
            try {
                const response = await api.get(`/api/request_cnpj/fetchData/${cpf}`);
                const info = response.data;

                setData(prevData => ({
                    ...prevData,
                    name: info.nome || info.razao,
                    cep: info.cep,
                    email: info.email,
                    ibge: info.ibge,
                    razao: info.razao,
                    phone: `(${info.ddd})${info.telcom}`,
                    address: info.endereco
                }));


                toast.success("Informações do CNPJ foram importadas");
            } catch (error) {
                toast.error("CNPJ invalido");
                console.error("Erro ao buscar dados", error);
            }
        }
        else {
            toast("Informe o CNPJ")
        }
    };

    const urlApi = "/api/person/"
    const urlReturn = "/pessoal/pessoas"

    const fetchDataCPF = async () => {
        if (cpf && birthDate) {
            const formatDate = (date) => {
                const [day, month, year] = date.split('/');
                return `${year}-${month}-${day}`;
            };

            const formattedDate = formatDate(birthDate);

            try {
                const response = await api.post("https://localhost:7221/RequestCpf/fetchData", {
                    cpf,
                    birthDate: formattedDate
                });
                const info = response.data.data[0];

                setData({ ...data, name: info.nome || '' });
                setData({ ...data, birthDate: info.normalizado_data_nascimento ? calculateAge(data.normalizado_data_nascimento) : 0 })

                alert("Ok");
            } catch (error) {
                alert("Great!");
                console.error("Erro ao buscar dados", error);
            }
        }
        else {
            alert("Informe o CPF e a Data de nascimento")
        }
    };

    return {
        data,
        options,
        fetchDataCNPJ,
        fetchDataCPF,
        setOptions,
        setOpenModalCity,
        setOpenModalGroup,
        openModalCity,
        openModalGroup,
        setData,
        urlReturn,
        urlApi
    }
}

export default useBasedFunctionPerson