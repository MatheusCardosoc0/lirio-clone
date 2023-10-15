import { useNavigate } from 'react-router-dom';
import { api } from '../libs/api';

const UseSubmitDataPut = (urlApi, urlReturn, id) => {
    const navigate = useNavigate()

    async function handleSubmit(event, data) {
        event.preventDefault()

        try {
            await api.put(`${urlApi}${id}`, data)

            alert("Ok")

            navigate(`${urlReturn}`)
        } catch (error) {
            alert("Error")
            console.log(error)
        }
    }

    return handleSubmit
}

export default UseSubmitDataPut;
