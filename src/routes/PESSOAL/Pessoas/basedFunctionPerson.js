import { useState } from 'react'
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut'
import useDeleteData from '../../../functions/useDeleteData'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import useGetDataSpecific from '../../../functions/useGetDataSpecific'

const useBasedFunctionPerson = (id) => {

    console.log(id)

    const [options, setOptions] = useState('PF')

    const [openModalCity, setOpenModalCity] = useState(false)
    const [openModalGroup, setOpenModalGroup] = useState(false)

    const urlApi = "/api/person/"
    const urlReturn = "/pessoal/pessoas"

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
    } = useForm({
        values: {
            age: 0
        }
    });

    const submitData = useSubmitDataPostOrPut(urlApi, urlReturn, id);
    const DeletePerson = useDeleteData(`${urlApi}`, id, urlReturn)

    const group = getValues("group")
    const city = getValues("city")


    const onSubmit = (data) => {
        if (!data.group) {
            return toast("Informe o grupo da pessoa")
        }
        else if (!data.city) {
            return toast("Informe a cidade da pessoa")
        }
        submitData(data)
    }

    useGetDataSpecific(id, `${urlApi}`, (data) => {
        if (data) {
            Object.keys(data).forEach(key => {
                setValue(key, data[key]);
            });
        }
    })

    return {
        options,
        setOptions,
        setOpenModalCity,
        setOpenModalGroup,
        openModalCity,
        openModalGroup,
        onSubmit,
        group,
        city,
        register,
        handleSubmit,
        DeletePerson,
        setValue
    }
}

export default useBasedFunctionPerson