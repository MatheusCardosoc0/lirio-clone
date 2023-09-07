import { useState } from "react"
import { BasicGridContainerForm, PrimaryForm } from "../../../../components/Form"
import { BasicInput, BasicSelect, ConsultInput } from "../../../../components/Inputs"
import { useSubmitDataPost } from "../../../../functions/useSubmitDataPost"


const NewCity = () => {

    const [name, setName] = useState('')
    const [ibgNumber, setIbgeNumber] = useState('')
    const [state, setState] = useState('')

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
                <ConsultInput label={"№ IBGE"} $isLarge
                    onChange={e => setIbgeNumber(e.target.value)} />
                <BasicSelect label={"UF"} $isLarge
                    onChange={e => setState(e.target.value)} />
            </BasicGridContainerForm>
        </PrimaryForm>
    );
}

export default NewCity;
