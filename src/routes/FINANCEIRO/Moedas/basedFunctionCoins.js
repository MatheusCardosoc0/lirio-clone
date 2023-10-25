import { useState } from 'react'

const useBasedFunctionGroup = () => {

    const [data, setData] = useState({
        name: ''
    })

    const urlApi = "/api/group/"
    const urlReturn = "/pessoal/grupos"

    return {
        urlApi,
        urlReturn,
        data,
        setData
    }
}

export default useBasedFunctionGroup