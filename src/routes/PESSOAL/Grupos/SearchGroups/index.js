import React, { useState } from 'react';
import { TablePrimary } from '../../../../components/Table';
import { BasicFilterElement, BasicSearchContainer } from '../../../../components/containers';
import { useGetDataList } from '../../../../functions/Api/useGetDataList';

const SearchGroups = () => {

    const [allGroups, setAllGroups] = useState([]);
    const [filteredGroups, setFilteredGroups] = useState([]);
    const [loading, setLoading] = useState(false)

    useGetDataList(setFilteredGroups, setAllGroups, '/api/group', setLoading);

    return (
        <BasicSearchContainer>
            <BasicFilterElement
                dataList={allGroups}
                setFilteredDataList={setFilteredGroups}
            />
            <TablePrimary
                data={filteredGroups}
                navigateTo={"change"}
                loading={loading}
                columns={[
                    { label: "ID", filed: "id" },
                    { label: "Nome", filed: "name" },
                ]}
            />
        </BasicSearchContainer>
    );
}

export default SearchGroups;
