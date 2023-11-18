import React, { useState } from 'react';
import { TablePrimary } from '../../../../components/Table';
import { BasicFilterElement, BasicSearchContainer } from '../../../../components/containers';
import { useGetDataList } from '../../../../functions/Api/useGetDataList';

const SearchGroupProducts = () => {

    const [allProductGroups, setAllProductGroups] = useState([]);
    const [filteredProductsGroup, setFilteredProductsGroup] = useState([]);

    useGetDataList(setFilteredProductsGroup, setAllProductGroups, '/api/group_product');

    return (
        <BasicSearchContainer>
            <BasicFilterElement
                dataList={allProductGroups}
                setFilteredDataList={setFilteredProductsGroup}
            />
            <TablePrimary
                data={filteredProductsGroup}
                navigateTo={"change"}
                columns={[
                    { label: "ID", filed: "id" },
                    { label: "Nome", filed: "name" }
                ]}
            />
        </BasicSearchContainer>
    );
}

export default SearchGroupProducts;
