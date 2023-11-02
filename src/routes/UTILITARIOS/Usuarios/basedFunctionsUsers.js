import { useState } from 'react'

const useBasedFunctionUsers = () => {

    const [data, setData] = useState({
        name: '',
        person: {},
        password: ''
    })

    const [openModalPerson, setOpenModalPerson] = useState(false)


    const urlApi = "/api/users_system/"
    const urlReturn = "/utilitarios/usuarios"

    return {
        urlApi,
        data,
        setData,
        setOpenModalPerson,
        openModalPerson,
        urlReturn
    }
}

export default useBasedFunctionUsers