import { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useGetDataSpecific from '../../../functions/useGetDataSpecific';
import useDeleteData from '../../../functions/useDeleteData';
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut';

const useBasedFunctionUsers = (id) => {

    const urlApi = "/api/users_system/"
    const urlReturn = "/utilitarios/usuarios"

    const [openModalPerson, setOpenModalPerson] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
    } = useForm({
        defaultValues: {
            name: '',
            password: '',
            person: null
        }
    });

    const submitData = useSubmitDataPostOrPut(urlApi, urlReturn, id);
    const DeleteUser = useDeleteData(`${urlApi}`, id, urlReturn)

    const person = getValues("person")

    const onSubmit = (data) => {
        if (!data.person) {
            return toast("Informe a pessoa relacionada")
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
        urlApi,
        setOpenModalPerson,
        openModalPerson,
        urlReturn,
        DeleteUser,
        handleSubmit,
        onSubmit,
        person,
        register,
        setValue
    }
}

export default useBasedFunctionUsers