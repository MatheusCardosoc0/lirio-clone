import { useState } from 'react'

const useBasedFunctionProductGroup = () => {

    const [data, setData] = useState({
        name: ''
    })


    const urlApi = "/api/group_product/"
    const urlReturn = "/materiais/grupos de produtos"

    return {
        urlApi,
        urlReturn,
        data,
        setData
    }
}

export default useBasedFunctionProductGroup