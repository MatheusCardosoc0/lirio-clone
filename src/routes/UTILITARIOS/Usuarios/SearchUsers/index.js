import React, { useState } from 'react';
import { TablePrimary } from '../../../../components/Table';
import { BasicFilterElement, BasicSearchContainer } from '../../../../components/containers';
import { useGetDataList } from '../../../../functions/Api/useGetDataList';

const SearchUsers = () => {

    const [allPersons, setAllPersons] = useState([]);
    const [filteredPersons, setFilteredPersons] = useState([]);
    const [loading, setLoading] = useState(false)

    useGetDataList(setFilteredPersons, setAllPersons, '/api/users_system', setLoading);

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
                    { label: "Pessoa", filed: "person" }
                ]}
            />
        </BasicSearchContainer>
    );
}

export default SearchUsers;
