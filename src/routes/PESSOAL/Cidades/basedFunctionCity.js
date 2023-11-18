import React, { useState } from 'react'
import toast from 'react-hot-toast'
import useDeleteData from '../../../functions/Api/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/Api/useSubmitDataPostOrPut'
import { useForm } from 'react-hook-form'
import useGetDataSpecific from '../../../functions/Api/useGetDataSpecific'

const useBasedFunctionCity = (id) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const urlApi = "/api/city/"
    const urlReturn = "/pessoal/cidades"

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        control
    } = useForm({
        defaultValues: {
            state: 'SP',
            ibgNumber: '',
            name: ''
        }
    })

    const state = getValues("state")
    const ibgNumber = getValues("ibgNumber")

    console.log(ibgNumber)

    const DeleteCity = useDeleteData(`${urlApi}`, id, urlReturn)

    const submitData = useSubmitDataPostOrPut(`${urlApi}`, urlReturn, id)

    const onSubmit = (data) => {
        if (!data.ibgNumber) {
            return toast("Informe o número do ibge da cidade")
        }
        if (!data.ibgNumber) {
            return toast("Informe número IBGE")
        }
        submitData(data)
    }

    const CheckForOpenModal = () => {
        if (state === 'nenhum' || state === '') {
            return toast("Preencha o campo estado")
        }

        setIsOpenModal(true)
    }

    const UpdateDataIdAndName = (data) => {
        setValue("name", data.name)
        setValue("ibgNumber", data.id)
    }

    useGetDataSpecific(id, `${urlApi}`, (data) => {
        if (data) {
            Object.keys(data).forEach(key => {
                setValue(key, data[key]);
            });
        }
    })


    return {

        setValue,
        urlReturn,
        UpdateDataIdAndName,
        CheckForOpenModal,
        isOpenModal,
        setIsOpenModal,
        DeleteCity,
        register,
        handleSubmit,
        onSubmit,
        control,
        ibgNumber,
        state
    }
}

export default useBasedFunctionCity