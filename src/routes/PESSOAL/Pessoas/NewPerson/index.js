import { useState } from "react"
import { BasicGridContainerForm, PrimaryForm } from "../../../../components/Form"
import { BasicInput, CheckInput, ConsultInput, InputDate } from "../../../../components/Inputs"
import { useSubmitDataPost } from "../../../../functions/useSubmitDataPost"
import { BasicModal } from "../../../../components/Modals"
import { api } from "../../../../libs/api"
import { ButtonStyle1 } from "../../../../components/Buttons"
import { calculateAge } from "../../../../functions/calculateAge"


const NewPerson = () => {

    const [name, setName] = useState('')
    const [razao, setRazao] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [CPF, setCPF] = useState('')
    const [IBGE, setIBGE] = useState('')
    const [inscricaoEstadual, setInscricaoEstadual] = useState('')
    const [address, setAddress] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [age, setAge] = useState(0)
    const [city, setCity] = useState({})
    const [group, setGroup] = useState({})
    const [cep, setCEP] = useState('')

    const [options, setOptions] = useState('PF')

    const [openModalCity, setOpenModalCity] = useState(false)
    const [openModalGroup, setOpenModalGroup] = useState(false)

    const handleSubmit = useSubmitDataPost('/api/person')

    const fetchDataCPF = async () => {
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

    const fetchDataCNPJ = async () => {
        if (CPF) {
            try {
                const response = await api.get(`/api/request_cnpj/fetchData/${CPF}`);
                const data = response.data;

                setName(data.nome || data.razao);
                setCEP(data.cep)
                setEmail(data.email)
                setIBGE(data.ibge)
                setRazao(data.razao)
                setPhone(data.phone)
                setAddress(data.endereco)
                setPhone(data.ddd + data.telcon)

                alert("Ok");
            } catch (error) {
                alert("Great!");
                console.error("Erro ao buscar dados", error);
            }
        }
        else {
            alert("Informe o CNPJ")
        }
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
                    group,
                    ibge: IBGE,
                    inscricaoEstadual,
                    Razao: razao || name,
                    cep,
                    cpf: CPF,
                    birthDate,
                    address
                }
                )}
            >
                <BasicGridContainerForm>
                    <CheckInput
                        options={[
                            { title: 'Pessoa Fisica', value: 'PF' },
                            { title: 'Pessoa Jurídica', value: 'PJ' }
                        ]}
                        setData={setOptions}
                        data={options}
                    />
                    <BasicInput
                        label={"Nome"}
                        $isLarge
                        onChange={e => setName(e.target.value)}
                        value={name} />

                    {options === 'PJ' && (
                        <div>
                            <BasicInput
                                label={"Razão"}
                                $isLarge
                                onChange={e => setRazao(e.target.value)}
                                value={razao || name} />

                            <BasicInput
                                label={"IBGE"}
                                $isLarge
                                onChange={e => setIBGE(e.target.value)}
                                value={IBGE} />
                        </div>
                    )}


                    <div>
                        <BasicInput
                            label={options === "PJ" ? "CNPJ" : "CPF"}
                            $isLarge
                            onChange={e => setCPF(e.target.value)}
                            value={CPF}
                        />
                        {options === 'PJ' && (
                            <BasicInput
                                label={"Inscrição Estadual"}
                                $isLarge
                                onChange={e => setInscricaoEstadual(e.target.value)}
                                value={inscricaoEstadual}
                            />
                        )}
                    </div>
                    <div>
                        <BasicInput
                            label={"CEP"}
                            $isLarge
                            onChange={e => setCEP(e.target.value)}
                            value={cep}
                        />
                        <BasicInput
                            label={"Endereço"}
                            $isLarge
                            onChange={e => setAddress(e.target.value)}
                            value={address}
                        />
                    </div>
                    <div>
                        <BasicInput label={"Telefone"} $isLarge
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                        />
                        <BasicInput
                            label={"Email"} $isLarge
                            onChange={e => setEmail(e.target.value)}
                            value={email}

                        />

                    </div>

                    {options === "PF" && (
                        <div>
                            <InputDate
                                label={"Data de Nascimento"}
                                $isLarge
                                setDate={setBirthDate}
                                value={birthDate}
                            />

                            <BasicInput label={"Idade"} $isLarge
                                onChange={e => setAge(e.target.value)} value={age} />
                        </div>
                    )}
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




                    {options === 'PF' ? (
                        <ButtonStyle1
                            type="button"
                            onClick={fetchDataCPF}
                            $color={'indigo'}
                        >
                            Buscar Dados do CPF
                        </ButtonStyle1>
                    ) : (
                        <ButtonStyle1
                            type="button"
                            onClick={fetchDataCNPJ}
                            $color={'purple'}
                        >
                            Buscar Dados do CNPJ
                        </ButtonStyle1>
                    )}

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
