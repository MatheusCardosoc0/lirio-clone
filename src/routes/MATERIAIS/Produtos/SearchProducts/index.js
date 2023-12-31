import React, { useState } from 'react';
import { TablePrimary } from '../../../../components/Table';
import { BasicFilterElement, BasicSearchContainer } from '../../../../components/containers';
import { useGetDataList } from '../../../../functions/Api/useGetDataList';

const SearchProducts = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useGetDataList(setFilteredProducts, setAllProducts, '/api/product', setLoading);

    return (
        <BasicSearchContainer>
            <BasicFilterElement
                dataList={allProducts}
                setFilteredDataList={setFilteredProducts}
            />
            <TablePrimary
                data={filteredProducts}
                navigateTo={"change"}
                loading={loading}
                columns={[
                    { label: "ID", filed: "id" },
                    { label: "Nome", filed: "name" },
                    { label: "Descrição", filed: "description" },
                    { label: "Preço", filed: "price" },
                    { label: "Grupo", filed: "group" }
                ]}
            />
        </BasicSearchContainer>
    );
}

export default SearchProducts;
