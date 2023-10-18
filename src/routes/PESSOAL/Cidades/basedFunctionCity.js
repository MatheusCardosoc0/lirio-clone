import React, { useState } from 'react'

const useBasedFunctionCity = () => {
    const [data, setData] = useState({
        ibgNumber: '',
        name: '',
        state: ''

    })

    const [isOpenModal, setIsOpenModal] = useState(false)

    const urlApi = "/api/city/"
    const urlReturn = "/pessoal/cidades"

    const CheckForOpenModal = () => {
        if (data.state === '') {
            return alert("Preencha o campo estado")
        }

        setIsOpenModal(true)
    }

    const UpdateDataIdAndName = (newId, newName) => {
        setData(prevData => ({
            ...prevData,
            ibgNumber: newId,
            name: newName
        }));
    }

    return {
        CheckForOpenModal,
        urlApi,
        urlReturn,
        UpdateDataIdAndName,
        isOpenModal,
        setIsOpenModal,
        setData,
        data
    }
}

export default useBasedFunctionCity