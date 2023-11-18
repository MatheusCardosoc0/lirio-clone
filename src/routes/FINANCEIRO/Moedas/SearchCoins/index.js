import React, { useState } from 'react';
import { TablePrimary } from '../../../../components/Table';
import { BasicFilterElement, BasicSearchContainer } from '../../../../components/containers';
import { useGetDataList } from '../../../../functions/Api/useGetDataList';

const SearchCoins = () => {

    const [allCoins, setAllCoins] = useState([]);
    const [filteredGroups, setFilteredGroups] = useState([]);

    useGetDataList(setFilteredGroups, setAllCoins, '/api/coins');

    return (
        <BasicSearchContainer>
            <BasicFilterElement
                dataList={allCoins}
                setFilteredDataList={setFilteredGroups}
            />
            <TablePrimary
                data={filteredGroups}
                navigateTo={"change"}
                columns={[
                    { label: "ID", filed: "id" },
                    { label: "Nome", filed: "name" },
                    { label: "Usa limite de crédito?", filed: "isUseCreditLimit" }
                ]}
            />
        </BasicSearchContainer>
    );
}

export default SearchCoins;
