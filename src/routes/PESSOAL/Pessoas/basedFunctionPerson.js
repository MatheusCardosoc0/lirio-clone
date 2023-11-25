import { useState } from 'react'
import useSubmitDataPostOrPut from '../../../functions/Api/useSubmitDataPostOrPut'
import useDeleteData from '../../../functions/Api/useDeleteData'
import toast from 'react-hot-toast'
import useGetDataSpecific from '../../../functions/Api/useGetDataSpecific'
import { useDispatch, useSelector } from 'react-redux'
import { updatePersonData, updatePersonField } from '../../../redux/actions/PESSOAL/personActions'

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
        currentSection
    }
}

export default useBasedFunctionPerson