import { useState } from 'react'

const useBasedFunctionProduct = () => {

    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        group: {}
    })

    const [openModalProductGroups, setOpenModalProductGroups] = useState(false)


    const urlApi = "/api/product/"
    const urlReturn = "/materiais/produtos"

    return {
        urlApi,
        urlReturn,
        data,
        setData,
        setOpenModalProductGroups,
        openModalProductGroups
    }
}

export default useBasedFunctionProduct