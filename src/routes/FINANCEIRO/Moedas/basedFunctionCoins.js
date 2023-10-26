import { useState } from 'react'

const useBasedFunctionCoin = () => {

    const [data, setData] = useState({
        name: '',
        isUseCreditLimit: false
    })

    const urlApi = "/api/coins/"
    const urlReturn = "/financeiro/moedas"

    return {
        urlApi,
        urlReturn,
        data,
        setData
    }
}

export default useBasedFunctionCoin