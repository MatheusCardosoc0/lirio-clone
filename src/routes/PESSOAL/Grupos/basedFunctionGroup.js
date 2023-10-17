import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetDataSpecific from '../../../functions/useGetDataSpecific'
import useDeleteData from '../../../functions/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/useSubmitDataPostOrPut'

const useBasedFunctionGroup = () => {

    const [data, setData] = useState({
        name: ''
    })
    const {
        name
    } = data

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