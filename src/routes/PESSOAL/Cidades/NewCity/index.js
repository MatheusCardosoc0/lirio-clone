import { useState } from "react"
import { BasicGridContainerForm, PrimaryForm } from "../../../../components/Form"
import { BasicInput, BasicSelect, ConsultInput } from "../../../../components/Inputs"
import { useSubmitDataPost } from "../../../../functions/useSubmitDataPost"
import { UFBRStates } from "../../../../utils/UFBRStates"
import { BasicModal } from "../../../../components/Modals"


const NewCity = () => {

    const [name, setName] = useState('')
    const [ibgNumber, setIbgeNumber] = useState('')
    const [state, setState] = useState('')

    const [isOpenModal, setIsOpenModal] = useState(false)

    const urlApi = "/api/city/"
    const urlReturn = "/pessoal/cidades"

    const handleSubmit = useSubmitDataPost(`${urlApi}`)

    const CheckForOpenModal = () => {
        if (state === '') {
            return alert("Preencha o campo estado")
        }

        setIsOpenModal(true)
    }

    return (
        <>
            <PrimaryForm
                Title="Cadastro de Cdades"
                urlCancel={urlReturn}
                onSubmit={(e) => handleSubmit(e, urlReturn, {
                    name,
                    ibgNumber,
                    state
                }
                )}
            >
                <BasicGridContainerForm>
                    <BasicInput
                        label={"Nome"}
                        $isLarge
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <div>
                        <ConsultInput
                            label={"№ IBGE"}
                            $isLarge
                            openModal={CheckForOpenModal}
                            onChange={e => setIbgeNumber(e.target.value)}
                            value={ibgNumber}
                        />
                        <BasicSelect
                            label={"UF"}
                            $isLarge
                            onChange={e => setState(e.target.value)}
                            options={UFBRStates}
                        />
                    </div>
                </BasicGridContainerForm>
            </PrimaryForm>
            {isOpenModal && (
                <BasicModal
                    IDForUrl={state}
                    closeModal={() => setIsOpenModal(false)}
                    setValueId={setIbgeNumber}
                    setValueName={setName}
                />
            )}
        </>
    );
}

export default NewCity;
