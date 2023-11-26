import { useState } from 'react'
import useSubmitDataPostOrPut from '../../../functions/Api/useSubmitDataPostOrPut'
import useDeleteData from '../../../functions/Api/useDeleteData'
import toast from 'react-hot-toast'
import useGetDataSpecific from '../../../functions/Api/useGetDataSpecific'
import { useDispatch, useSelector } from 'react-redux'
import { updatePersonData, updatePersonField } from '../../../redux/actions/PESSOAL/personActions'
import { api } from '../../../libs/api'

const useBasedFunctionPerson = (id) => {

    const dispatch = useDispatch();
    const personData = useSelector(state => state.person);

    const [options, setOptions] = useState('PF')

    const [openModalCity, setOpenModalCity] = useState(false)
    const [openModalGroup, setOpenModalGroup] = useState(false)

    const [currentSection, setCurrentSection] = useState("Dados principais")

    const sections = [
        { title: "Dados Principais", value: "Dados principais" },
        { title: "Dados extras", value: "Dados complementares" }
    ]

    const urlApi = "/api/person/"
    const urlReturn = "/pessoal/pessoas"

    const handleChange = (eventOrFieldName, value) => {
        let fieldName, fieldValue;

        if (eventOrFieldName && eventOrFieldName.target) {
            fieldName = eventOrFieldName.target.name;
            fieldValue = eventOrFieldName.target.value;
        } else {
            fieldName = eventOrFieldName;
            fieldValue = value;
        }

        dispatch(updatePersonField(fieldName, fieldValue));
    };

    async function fetchDataCNPJ() {
        if (personData.cpf) {
            try {
                const response = await api.get(`https://erpwebapitest.azurewebsites.net/api/request_cnpj/fetchData/${personData.cpf}`)
                const data = response.data
                console.log(data)
                handleChange("nome", data.nome || data.razao);
                handleChange("cep", data.cep)
                handleChange("email", data.email)
                handleChange("ibge", data.ibge)
                handleChange("razao", data.razao)
                handleChange("phone", data.phone)
                handleChange("endereco", data.endereco)
                handleChange("phone", data.ddd + data.telcon)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const submitData = useSubmitDataPostOrPut(urlApi, urlReturn, id);
    const DeletePerson = useDeleteData(`${urlApi}`, id, urlReturn)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!personData.group) {
            return toast("Informe o grupo da pessoa")
        }
        else if (!personData.city) {
            return toast("Informe a cidade da pessoa")
        }
        submitData(personData)
    }

    useGetDataSpecific(id, `${urlApi}`, (data) => {
        if (data) {
            dispatch(updatePersonData(data));
        }
    })

    return {
        options,
        setOptions,
        setOpenModalCity,
        setOpenModalGroup,
        openModalCity,
        openModalGroup,
        handleSubmit,
        DeletePerson,
        personData,
        handleChange,
        sections,
        setCurrentSection,
        currentSection,
        fetchDataCNPJ
    }
}

export default useBasedFunctionPerson