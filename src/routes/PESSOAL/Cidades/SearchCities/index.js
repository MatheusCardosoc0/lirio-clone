import React, { useState } from 'react';
import { TablePrimary } from '../../../../components/Table';
import { BasicFilterElement, BasicSearchContainer } from '../../../../components/containers';
import { useGetDataList } from '../../../../functions/useGetDataList';

const SearchCities = () => {

    const [allCities, setAllCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);

    useGetDataList(setFilteredCities, setAllCities, '/api/city');

    return (
        <BasicSearchContainer>
            <BasicFilterElement
                dataList={allCities}
                setFilteredDataList={setFilteredCities}
            />
            <TablePrimary
                data={filteredCities}
                navigateTo={"change"}
                columns={[
                    { label: "ID", filed: "id" },
                    { label: "Nome", filed: "name" },
                    { label: "№ IBGE", filed: "ibgNumber" },
                ]}
            />
        </BasicSearchContainer>
    );
}

export default SearchCities;
