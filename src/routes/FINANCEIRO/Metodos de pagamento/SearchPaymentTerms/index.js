import React, { useState } from 'react';
import { TablePrimary } from '../../../../components/Table';
import { BasicFilterElement, BasicSearchContainer } from '../../../../components/containers';
import { useGetDataList } from '../../../../functions/Api/useGetDataList';

const SearchPaymentTerms = () => {

    const [allCoins, setAllCoins] = useState([]);
    const [filteredGroups, setFilteredGroups] = useState([]);
    const [loading, setLoading] = useState(false)

    useGetDataList(setFilteredGroups, setAllCoins, '/api/payment_terms', setLoading);

    return (
        <BasicSearchContainer>
            <BasicFilterElement
                dataList={allCoins}
                setFilteredDataList={setFilteredGroups}
            />
            <TablePrimary
                data={filteredGroups}
                navigateTo={"change"}
                loading={loading}
                columns={[
                    { label: "ID", filed: "id" },
                    { label: "Nome", filed: "name" },
                    { label: "Parcelas", filed: "installments" }
                ]}
            />
        </BasicSearchContainer>
    );
}

export default SearchPaymentTerms;
