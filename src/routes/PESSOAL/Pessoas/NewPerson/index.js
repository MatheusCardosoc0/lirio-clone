import { useState } from "react"
import { BasicGridContainerForm, PrimaryForm } from "../../../../components/Form"
import { BasicInput, ConsultInput } from "../../../../components/Inputs"
import { useSubmitDataPost } from "../../../../functions/useSubmitDataPost"
import { BasicModal } from "../../../../components/Modals"


const NewPerson = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState(0)
    const [city, setCity] = useState({})
    const [group, setGroup] = useState({})

    const [openModalCity, setOpenModalCity] = useState(false)
    const [openModalGroup, setOpenModalGroup] = useState(false)

    const handleSubmit = useSubmitDataPost('/api/person')

    console.log(city)
    console.log(group)

    return (
        <>
            <PrimaryForm
                Title="Cadastro de pessoas"
                urlCancel={"/pessoal/pessoas"}
                onSubmit={(e) => handleSubmit(e, "/pessoal/pessoas", {
                    name,
                    email,
                    phone,
                    age,
                    city,
                    group
                }
                )}
            >
                <BasicGridContainerForm>
                    <div>
                        <BasicInput label={"Nome"} $isLarge
                            onChange={e => setName(e.target.value)} />
                        <BasicInput label={"Email"} $isLarge
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <BasicInput label={"Telefone"} $isLarge
                            onChange={e => setPhone(e.target.value)} />

                        <BasicInput label={"Idade"} $isLarge
                            onChange={e => setAge(e.target.value)} />
                    </div>

                    <ConsultInput
                        $isLarge
                        label={"Cidade"}
                        onChange={value => setCity(value)}
                        openModal={() => setOpenModalCity(true)}
                        title={"Consultar cidades cadastradas"}
                        value={city.name}
                    />

                    <ConsultInput
                        $isLarge
                        label={"Grupo"}
                        onChange={value => setGroup(value)}
                        openModal={() => setOpenModalGroup(true)}
                        title={"Consultar grupos cadastrados"}
                        value={group.name}
                    />

                </BasicGridContainerForm>
            </PrimaryForm>
            {openModalCity && (
                <BasicModal
                    Url={'/api/city'}
                    closeModal={() => setOpenModalCity(false)}
                    setObject={value => setCity(value)}
                    filed1={"id"}
                    filed2={"name"}
                />
            )}

            {openModalGroup && (
                <BasicModal
                    Url={'/api/group'}
                    closeModal={() => setOpenModalGroup(false)}
                    setObject={value => setGroup(value)}
                    filed1={"id"}
                    filed2={"name"}
                />
            )}
        </>
    );
}

export default NewPerson;
