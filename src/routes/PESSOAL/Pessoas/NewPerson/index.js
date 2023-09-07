import { useState } from "react"
import { BasicGridContainerForm, PrimaryForm } from "../../../../components/Form"
import { BasicInput } from "../../../../components/Inputs"
import { useSubmitDataPost } from "../../../../functions/useSubmitDataPost"


const NewPerson = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState(0)

    const handleSubmit = useSubmitDataPost('/api/person')

    return (
        <PrimaryForm
            Title="Cadastro de pessoas"
            urlCancel={"/pessoal/pessoas"}
            onSubmit={(e) => handleSubmit(e, "/pessoal/pessoas", {
                name,
                email,
                phone,
                age
            }
            )}
        >
            <BasicGridContainerForm>
                <BasicInput label={"Nome"} $isLarge
                    onChange={e => setName(e.target.value)} />
                <BasicInput label={"Email"} $isLarge
                    onChange={e => setEmail(e.target.value)} />
                <BasicInput label={"Telefone"} $isLarge
                    onChange={e => setPhone(e.target.value)} />
                <BasicInput label={"Idade"} $isLarge
                    onChange={e => setAge(e.target.value)} />
            </BasicGridContainerForm>
        </PrimaryForm>
    );
}

export default NewPerson;
