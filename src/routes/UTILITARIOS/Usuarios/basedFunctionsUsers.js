import { useState } from 'react'
import toast from 'react-hot-toast';
import useGetDataSpecific from '../../../functions/Api/useGetDataSpecific';
import useDeleteData from '../../../functions/Api/useDeleteData';
import useSubmitDataPostOrPut from '../../../functions/Api/useSubmitDataPostOrPut';

const useBasedFunctionUsers = (id) => {

    const urlApi = "/api/users_system/"
    const urlReturn = "/utilitarios/usuarios"

    const [openModalPerson, setOpenModalPerson] = useState(false)

    const [userData, setUserData] = useState({
        name: '',
        password: '',
        person: null
    })

    const submitData = useSubmitDataPostOrPut(urlApi, urlReturn, id);
    const DeleteUser = useDeleteData(`${urlApi}`, id, urlReturn)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!userData.person) {
            return toast("Informe a pessoa relacionada")
        }
        submitData(userData)
    }

    useGetDataSpecific(id, `${urlApi}`, setUserData)

    return {
        setOpenModalPerson,
        openModalPerson,
        urlReturn,
        DeleteUser,
        onSubmit,
        userData,
        setUserData
    }
}

export default useBasedFunctionUsers