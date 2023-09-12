import React, { useState } from 'react';
import { TablePrimary } from '../../../../components/Table';
import { BasicFilterElement, BasicSearchContainer } from '../../../../components/containers';
import { useGetDataList } from '../../../../functions/useGetDataList';

const SearchPerson = () => {

    const [allPersons, setAllPersons] = useState([]);
    const [filteredPersons, setFilteredPersons] = useState([]);

    useGetDataList(setFilteredPersons, setAllPersons, '/api/person');

    return (
        <BasicSearchContainer>
            <BasicFilterElement
                dataList={allPersons}
                setFilteredDataList={setFilteredPersons}
            />
            <TablePrimary
                data={filteredPersons}
                navigateTo={"change"}
                columns={[
                    { label: "ID", filed: "id" },
                    { label: "Nome", filed: "name" },
                    { label: "Email", filed: "email" },
                    { label: "Telefone", filed: "phone" },
                    { label: "Idade", filed: "age" },
                    { label: "Grupo", filed: `${(row) => row.group && row.group.name}` },
                    { label: "Cidade", filed: "city.name" }
                ]}
            />
        </BasicSearchContainer>
    );
}

export default SearchPerson;
