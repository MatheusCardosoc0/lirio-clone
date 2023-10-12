import React, { useState } from 'react';
import { BasicGridContainerForm, PrimaryForm } from '../../../../components/Form';
import { BasicInput, ConsultInput, InputDate, CheckInput } from '../../../../components/Inputs';
import { useParams } from 'react-router-dom';
import useSubmitDataPut from '../../../../functions/useSubmitDataPut';
import useDeleteData from '../../../../functions/useDeleteData';
import useGetDataSpecific from '../../../../functions/useGetDataSpecific';
import { BasicModal } from '../../../../components/Modals';
import { ButtonStyle1 } from '../../../../components/Buttons';
import { api } from '../../../../libs/api';
import { calculateAge } from '../../../../functions/calculateAge';

const ChangePerson = () => {

    const [data, setData] = useState({
        name: '',
        razao: '',
        email: '',
        phone: '',
        cpf: '',
        ibge: '',
        inscricaoEstadual: '',
        address: '',
        birthDate: '',
        age: 0,
        city: {},
        group: {},
        cep: ''
    });


    const { name, razao, email, phone, cpf: CPF, ibge: IBGE, inscricaoEstadual, address, birthDate, age, city, group, cep } = data;

    const { id } = useParams()

    const [openModalCity, setOpenModalCity] = useState(false)
    const [openModalGroup, setOpenModalGroup] = useState(false)

    const [options, setOptions] = useState('PF')

    const urlApi = "/api/person/"
    const urlReturn = "/pessoal/pessoas"

    useGetDataSpecific(id, `${urlApi}`, setData)

    const DeletePerson = useDeleteData(`${urlApi}`, id, urlReturn)

    const handleSubmit = useSubmitDataPut(`${urlApi}`, urlReturn, id)

    console.log(data)

    const fetchDataCNPJ = async () => {
        if (CPF) {
            try {
                const response = await api.get(`/api/request_cnpj/fetchData/${CPF}`);
                const info = response.data;

                console.log(info)

                setData(prevData => ({
                    ...prevData,
                    name: info.nome || info.razao,
                    cep: info.cep,
                    email: info.email,
                    ibge: info.ibge,
                    razao: info.razao,
                    phone: `(${info.ddd})${info.telcom}`,
                    address: info.endereco
                }));


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
                const info = response.data.data[0];

                setData({ ...data, name: info.nome || '' });
                setData({ ...data, birthDate: info.normalizado_data_nascimento ? calculateAge(data.normalizado_data_nascimento) : 0 })

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

    return (
        <>
            <PrimaryForm
                Title="Cadastro de pessoas"
                urlCancel={urlReturn}
                onSubmit={(e) => handleSubmit(e, {
                    id,
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
                removeFunction={() => DeletePerson()}
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
                        onChange={e => setData({ ...data, name: e.target.value })}
                        value={name} />

                    {options === 'PJ' && (
                        <div>
                            <BasicInput
                                label={"Razão"}
                                $isLarge
                                onChange={e => setData({ ...data, razao: e.target.value })}
                                value={razao || name} />

                            <BasicInput
                                label={"IBGE"}
                                $isLarge
                                onChange={e => setData({ ...data, IBGE: e.target.value })}
                                value={IBGE} />
                        </div>
                    )}


                    <div>
                        <BasicInput
                            label={options === "PJ" ? "CNPJ" : "CPF"}
                            $isLarge
                            onChange={e => setData({ ...data, cpf: e.target.value })}
                            value={CPF}
                        />
                        {options === 'PJ' && (
                            <BasicInput
                                label={"Inscrição Estadual"}
                                $isLarge
                                onChange={e => setData({ ...data, inscricaoEstadual: e.target.value })}
                                value={inscricaoEstadual}
                            />
                        )}
                    </div>
                    <div>
                        <BasicInput
                            label={"CEP"}
                            $isLarge
                            onChange={e => setData({ ...data, cep: e.target.value })}
                            value={cep}
                        />
                        <BasicInput
                            label={"Endereço"}
                            $isLarge
                            onChange={e => setData({ ...data, address: e.target.value })}
                            value={address}
                        />
                    </div>
                    <div>
                        <BasicInput label={"Telefone"} $isLarge
                            onChange={e => setData({ ...data, phone: e.target.value })}
                            value={phone}
                        />
                        <BasicInput
                            label={"Email"} $isLarge
                            onChange={e => setData({ ...data, email: e.target.value })}
                            value={email}

                        />

                    </div>

                    {options === "PF" && (
                        <div>
                            <InputDate
                                label={"Data de Nascimento"}
                                $isLarge
                                setDate={setData}
                                value={birthDate}
                                object={data}
                            />

                            <BasicInput label={"Idade"} $isLarge
                                onChange={e => setData({ ...data, age: e.target.value })}
                                value={age}
                            />
                        </div>
                    )}
                    <div>
                        <ConsultInput
                            $isLarge
                            label={"Cidade"}
                            onChange={value => setData({ ...data, city: value })}
                            openModal={() => setOpenModalCity(true)}
                            title={"Consultar cidades cadastradas"}
                            value={city.name}
                        />

                        <ConsultInput
                            $isLarge
                            label={"Grupo"}
                            onChange={value => setData({ ...data, group: value })}
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
                    setObject={value => setData({ ...data, city: value })}
                    filed1={"id"}
                    filed2={"name"}
                />
            )}

            {openModalGroup && (
                <BasicModal
                    Url={'/api/group'}
                    closeModal={() => setOpenModalGroup(false)}
                    setObject={value => setData({ ...data, group: value })}
                    filed1={"id"}
                    filed2={"name"}
                />
            )}
        </>
    );
}

export default ChangePerson;
