import { useState } from 'react'
import toast from 'react-hot-toast'
import useDeleteData from '../../../functions/Api/useDeleteData'
import useSubmitDataPostOrPut from '../../../functions/Api/useSubmitDataPostOrPut'
import useGetDataSpecific from '../../../functions/Api/useGetDataSpecific'
import { setData } from '../../../redux/actions/PESSOAL/personActions'

const useBasedFunctionCity = (id) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const urlApi = "/api/city/"
    const urlReturn = "/pessoal/cidades"

    const [cityData, setCityData] = useState({
        state: 'SP',
        ibgNumber: '',
        name: ''
    })

    const DeleteCity = useDeleteData(`${urlApi}`, id, urlReturn)

    const submitData = useSubmitDataPostOrPut(`${urlApi}`, urlReturn, id)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!cityData.ibgNumber) {
            return toast("Informe o número do ibge da cidade")
        }
        if (!cityData.ibgNumber) {
            return toast("Informe número IBGE")
        }
        submitData(cityData)
    }

    const CheckForOpenModal = () => {
        if (cityData.state === 'nenhum' || cityData.state === '') {
            return toast("Preencha o campo estado")
        }

        setIsOpenModal(true)
    }

    const UpdateDataIdAndName = (data) => {
        console.log(data)
        setCityData({ ...cityData, ibgNumber: data.id, name: data.name })
    }

    useGetDataSpecific(id, `${urlApi}`, setData)


    return {
        urlReturn,
        UpdateDataIdAndName,
        CheckForOpenModal,
        isOpenModal,
        setIsOpenModal,
        DeleteCity,
        onSubmit,
        cityData,
        setCityData
    }
}

export default useBasedFunctionCity