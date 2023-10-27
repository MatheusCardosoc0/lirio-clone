import { useState } from 'react'

const useBasedFunctionPaymentTerms = () => {

    const [data, setData] = useState({
        name: '',
        installments: 1
    })

    const urlApi = "/api/payment_terms/"
    const urlReturn = "/financeiro/metodos de pagamento"

    return {
        urlApi,
        urlReturn,
        data,
        setData
    }
}

export default useBasedFunctionPaymentTerms