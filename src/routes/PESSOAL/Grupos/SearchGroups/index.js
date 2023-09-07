import React, { useState } from 'react';
import { TablePrimary } from '../../../../components/Table';
import { BasicFilterElement, BasicSearchContainer } from '../../../../components/containers';
import { useGetDataList } from '../../../../functions/useGetDataList';

const SearchGroups = () => {

    const [allGroups, setAllGroups] = useState([]);
    const [filteredGroups, setFilteredGroups] = useState([]);

    useGetDataList(setFilteredGroups, setAllGroups, '/api/group');

    return (
        <BasicSearchContainer>
            <BasicFilterElement
                dataList={allGroups}
                setFilteredDataList={setFilteredGroups}
            />
            <TablePrimary
                data={filteredGroups}
                navigateTo={"change"}
                columns={[
                    { label: "ID", filed: "id" },
                    { label: "Nome", filed: "name" },
                ]}
            />
        </BasicSearchContainer>
    );
}

export default SearchGroups;
