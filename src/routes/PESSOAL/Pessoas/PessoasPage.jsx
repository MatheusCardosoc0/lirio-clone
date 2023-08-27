import React, { useEffect, useState } from 'react';
import { BasicInput } from '../../../components/Inputs';
import { AiOutlineSearch } from 'react-icons/ai'
import { InputContainer } from './styles/InputContainer';
import { ButtonStyle1 } from '../../../components/Buttons';
import { PersonContainer } from './styles/PersonContainer';
import { TablePrimary } from '../../../components/Table';
import { api } from '../../../libs/api';

const PessoasPage = () => {

    const [persons, setPersons] = useState([])

    async function getPersons() {
        const data = await api.get('/api/user')

        setPersons(data.data)
    }

    useEffect(() => {
        getPersons()
    }, [])

    return (
        <PersonContainer>
            <InputContainer>
                <BasicInput max label={"Id"} />
                <div>
                    <BasicInput max label={"Nome"} />
                    <ButtonStyle1>
                        <AiOutlineSearch />
                        Filtrar
                    </ButtonStyle1>
                </div>
            </InputContainer>
            <TablePrimary
                data={persons}
                columns={[
                    { header: "ID", filed: "id" },
                    { header: "Nome", filed: "name" },
                    { header: "Email", filed: "email" },
                    { header: "Telefone", filed: "phone" },
                    { header: "Idade", filed: "age" }
                ]}
            />
        </PersonContainer>
    );
}

export default PessoasPage;
