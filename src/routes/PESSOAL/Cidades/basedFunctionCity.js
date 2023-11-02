import React, { useState } from 'react'
import toast from 'react-hot-toast'

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
        if (data.state === 'Nenhum' || data.state === '') {
            return toast("Preencha o campo estado", {
                style: {
                    backgroundColor: 'yellow',
                    color: 'black'
                }
            })
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