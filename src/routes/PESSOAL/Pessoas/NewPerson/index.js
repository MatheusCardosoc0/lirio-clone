import { useState } from "react"
import { BasicGridContainerForm, PrimaryForm } from "../../../../components/Form"
import { BasicInput, ConsultInput, InputDate } from "../../../../components/Inputs"
import { useSubmitDataPost } from "../../../../functions/useSubmitDataPost"
import { BasicModal } from "../../../../components/Modals"
import axios from "axios"
import { api } from "../../../../libs/api"
import { ButtonStyle1 } from "../../../../components/Buttons"


const NewPerson = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [CPF, setCPF] = useState('')
    const [adress, setAdress] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [age, setAge] = useState(0)
    const [city, setCity] = useState({})
    const [group, setGroup] = useState({})

    const [openModalCity, setOpenModalCity] = useState(false)
    const [openModalGroup, setOpenModalGroup] = useState(false)

    const handleSubmit = useSubmitDataPost('/api/person')

    const fetchData = async () => {
        if (CPF && birthDate) {
            const formatDate = (date) => {
                const [day, month, year] = date.split('/');
                return `${year}-${month}-${day}`;
            };

            const formattedDate = formatDate(birthDate);

            try {
                const response = await api.post("https://localhost:7221/RequestCpf/fetchData", {
                    cpf: CPF,
                    birthDate: formattedDate
                });
                const data = response.data.data[0];

                setName(data.nome || '');
                setAge(data.normalizado_data_nascimento ? calculateAge(data.normalizado_data_nascimento) : 0)

                alert("Ok");
            } catch (error) {
                alert("Great!");
                console.error("Erro ao buscar dados", error);
            }
        }
        else {
            alert("Informe o CPF e a Data de nascimento")
        }
    };



    const calculateAge = (birthDate) => {
        const [day, month, year] = birthDate.split("/");
        const dob = new Date(year, month - 1, day);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    };

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
                        <BasicInput
                            label={"Nome"}
                            $isLarge
                            onChange={e => setName(e.target.value)}
                            value={name} />

                    </div>
                    <div>
                        <BasicInput
                            label={"CPF"}
                            $isLarge
                            onChange={e => setCPF(e.target.value)}
                            value={CPF}
                        />
                        <BasicInput
                            label={"Endereço"}
                            $isLarge
                            onChange={e => setAdress(e.target.value)}
                            value={adress}
                        />
                    </div>
                    <div>
                        <BasicInput label={"Telefone"} $isLarge
                            onChange={e => setPhone(e.target.value)} />

                        <BasicInput label={"Idade"} $isLarge
                            onChange={e => setAge(e.target.value)} value={age} />
                    </div>

                    <div>
                        <InputDate
                            label={"Data de Nascimento"}
                            $isLarge
                            setDate={setBirthDate}
                            value={birthDate}
                        />
                        <BasicInput label={"Email"} $isLarge
                            onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div>
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
                    </div>




                    <ButtonStyle1
                        type="button"
                        onClick={fetchData}
                        $color={'indigo'}
                    >
                        Buscar Dados do CPF
                    </ButtonStyle1>

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
