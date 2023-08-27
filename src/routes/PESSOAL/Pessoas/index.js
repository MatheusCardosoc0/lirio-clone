import React, { useEffect, useState } from 'react';
import { BasicInput } from '../../../components/Inputs';
import { AiOutlineSearch } from 'react-icons/ai'
import { InputContainer } from './styles/InputContainer';
import { ButtonStyle1 } from '../../../components/Buttons';
import { PersonContainer } from './styles/PersonContainer';
import { TablePrimary } from '../../../components/Table';
import { api } from '../../../libs/api';
import { useDispatch, useSelector } from 'react-redux';
import { SearchTermPersonId, SearchTermPersonName } from '../../../redux/actions/personActions';

const PessoasPage = () => {

    const [allPersons, setAllPersons] = useState([]); // Guardar todos os dados
    const [filteredPersons, setFilteredPersons] = useState([]); // Guardar dados filtrados

    async function getPersons() {
        try {
            const data = await api.get('/api/user');
            setAllPersons(data.data);
            setFilteredPersons(data.data);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        getPersons();
    }, []);

    const dispatch = useDispatch();

    const handleSetSearchTermName = (str) => {
        dispatch(SearchTermPersonName(str));
    };

    const handleSetSearchTermId = (str) => {
        dispatch(SearchTermPersonId(str));
    };

    const isSearchTermName = useSelector(state => state.pessoal.searchTermName)
    const isSearchTermId = useSelector(state => state.pessoal.searchTermId)

    const filterPerson = () => {
        const filter = allPersons.filter(person =>
            person.id.toLowerCase().includes(isSearchTermId.toLowerCase()) && person.name.toLowerCase().includes(isSearchTermName.toLowerCase())
        );

        setFilteredPersons(filter);
    };

    return (
        <PersonContainer>
            <InputContainer>
                <BasicInput
                    label={"Id"}
                    $isLarge
                    onChange={e => handleSetSearchTermId(e.target.value)}
                    value={isSearchTermId}
                />
                <div>
                    <BasicInput
                        max label={"Nome"}
                        onChange={e => handleSetSearchTermName(e.target.value)}
                        value={isSearchTermName}
                    />
                    <ButtonStyle1
                        onClick={() => filterPerson()} // Corrigido
                    >
                        <AiOutlineSearch />
                        Filtrar
                    </ButtonStyle1>
                </div>
            </InputContainer>
            <TablePrimary
                data={filteredPersons} // Usar pessoas filtradas aqui
                columns={[
                    { label: "ID", filed: "id" },
                    { label: "Nome", filed: "name" },
                    { label: "Email", filed: "email" },
                    { label: "Telefone", filed: "phone" },
                    { label: "Idade", filed: "age" }
                ]}
            />
        </PersonContainer>
    );
}

export default PessoasPage;