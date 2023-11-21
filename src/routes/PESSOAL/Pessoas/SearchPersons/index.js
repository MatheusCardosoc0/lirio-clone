import React, { useState } from 'react';
import { TablePrimary } from '../../../../components/Table';
import { BasicFilterElement, BasicSearchContainer } from '../../../../components/containers';
import { useGetDataList } from '../../../../functions/Api/useGetDataList';

const SearchPerson = () => {

    const [allPersons, setAllPersons] = useState([]);
    const [filteredPersons, setFilteredPersons] = useState([]);
    const [loading, setLoading] = useState(false)

    useGetDataList(setFilteredPersons, setAllPersons, '/api/person', setLoading);

    return (
        <BasicSearchContainer>
            <BasicFilterElement
                dataList={allPersons}
                setFilteredDataList={setFilteredPersons}
            />
            <TablePrimary
                data={filteredPersons}
                navigateTo={"change"}
                loading={loading}
                columns={[
                    { label: "ID", filed: "id" },
                    { label: "Nome", filed: "name" },
                    { label: "Email", filed: "email" },
                    { label: "Telefone", filed: "phone" },
                    { label: "Idade", filed: "age" },
                    { label: "CPF", filed: "cpf" },
                    { label: "Endereço", filed: "address" },
                    { label: "Data de Nascimento", filed: "birthDate" },
                    { label: "IBGE", filed: "ibge" },
                    { label: "Razão", filed: "razao" },
                    { label: "Inscrição Estadual", filed: "inscricaoEstadual" },
                    { label: "CEP", filed: "cep" },
                    { label: "Grupo", filed: "group" },
                    { label: "Cidade", filed: "city" }
                ]}
            />
        </BasicSearchContainer>
    );
}

export default SearchPerson;
