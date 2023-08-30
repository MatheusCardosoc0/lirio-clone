import { useState } from "react"
import { api } from "../../../../libs/api"
import { PrimaryForm } from "../../../../components/Form"
import { InputContainerPerson } from "../styles/InputContainerPerson"
import { BasicInput } from "../../../../components/Inputs"
import { useNavigate } from "react-router-dom"


const NewPerson = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState(0)

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            await api.post('/api/user', {
                name,
                email,
                phone,
                age
            })

            alert("Ok")

            navigate("pessoal/pessoas")
        } catch (error) {
            alert("Error")
            console.log(error)
        }
    }

    return (
        <PrimaryForm
            Title="Cadastro de pessoas"
            urlCancel={"/pessoal/pessoas"}
            onSubmit={handleSubmit}
        >
            <InputContainerPerson>
                <BasicInput label={"Nome"} $isLarge
                    onChange={e => setName(e.target.value)} />
                <BasicInput label={"Email"} $isLarge
                    onChange={e => setEmail(e.target.value)} />
                <BasicInput label={"Telefone"} $isLarge
                    onChange={e => setPhone(e.target.value)} />
                <BasicInput label={"Idade"} $isLarge
                    onChange={e => setAge(e.target.value)} />
            </InputContainerPerson>
        </PrimaryForm>
    );
}

export default NewPerson;
