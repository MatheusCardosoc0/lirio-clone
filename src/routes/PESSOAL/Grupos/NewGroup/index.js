import { useState } from "react"
import { BasicGridContainerForm, PrimaryForm } from "../../../../components/Form"
import { BasicInput } from "../../../../components/Inputs"
import { useSubmitDataPost } from "../../../../functions/useSubmitDataPost"


const NewGroup = () => {

    const [name, setName] = useState('')

    const urlApi = "/api/group/"
    const urlReturn = "/pessoal/grupos"

    const handleSubmit = useSubmitDataPost(`${urlApi}`)

    return (
        <PrimaryForm
            Title="Cadastro de Grupos"
            urlCancel={urlReturn}
            onSubmit={(e) => handleSubmit(e, urlReturn, {
                name,
            }
            )}
        >
            <BasicGridContainerForm>
                <BasicInput label={"Nome"} $isLarge
                    onChange={e => setName(e.target.value)} />
            </BasicGridContainerForm>
        </PrimaryForm>
    );
}

export default NewGroup;
