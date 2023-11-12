import { useState } from 'react'
import toast from 'react-hot-toast'
import useGetDataSpecific from '../../../functions/useGetDataSpecific'
import useDeleteData from '../../../functions/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut'
import { useForm } from 'react-hook-form'

const useBasedFunctionProduct = (id) => {

    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        group: {}
    })

    const [openModalProductGroups, setOpenModalProductGroups] = useState(false)


    const urlApi = "/api/product/"
    const urlReturn = "/materiais/produtos"

    const {
        register,
        handleSubmit,
        setValue,
        getValues
    } = useForm({
        defaultValues: {
            name: '',
            description: '',
            price: '',
            group: null
        }
    })

    const group = getValues("group")

    const submitData = useSubmitDataPostOrPut(urlApi, urlReturn, id);
    const DeleteProduct = useDeleteData(`${urlApi}`, id, urlReturn)

    useGetDataSpecific(id, `${urlApi}`, (data) => {
        if (data) {
            Object.keys(data).forEach(key => {
                setValue(key, data[key]);
            });
        }
    })

    const onSubmit = (data) => {
        if (!data.group) {
            return toast("Informe o grupo do produto")
        }
        submitData(data)
    }

    return {
        data,
        setData,
        setOpenModalProductGroups,
        openModalProductGroups,
        register,
        handleSubmit,
        setValue,
        onSubmit,
        DeleteProduct,
        group
    }
}

export default useBasedFunctionProduct