import React, { useState } from 'react';
import { TablePrimary } from '../../../../components/Table';
import { BasicFilterElement, BasicSearchContainer } from '../../../../components/containers';
import { useGetDataList } from '../../../../functions/Api/useGetDataList';

const SearchCities = () => {

    const [allCities, setAllCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);
    const [loading, setLoading] = useState(false)

    useGetDataList(setFilteredCities, setAllCities, '/api/city', setLoading);

    return (
        <BasicSearchContainer>
            <BasicFilterElement
                dataList={allCities}
                setFilteredDataList={setFilteredCities}
            />
            <TablePrimary
                data={filteredCities}
                navigateTo={"change"}
                loading={loading}
                columns={[
                    { label: "ID", filed: "id" },
                    { label: "Nome", filed: "name" },
                    { label: "№ IBGE", filed: "ibgNumber" },
                    { label: "Estado", filed: "state" }
                ]}
            />
        </BasicSearchContainer>
    );
}

export default SearchCities;
