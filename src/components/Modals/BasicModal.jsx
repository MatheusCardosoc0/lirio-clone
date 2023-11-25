import React, { useState } from 'react';
import { BasicModalStyle } from './BasicModalStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { BasicFilterElement } from '../containers';
import { TablePrimary } from '../Table';
import { useGetDataList } from '../../functions/Api/useGetDataList';
import { CloseButton } from '../Buttons';

const BasicModal = ({
    setObject,
    closeModal,
    Url,
    primaryValue = "id",
    secondValue = "name"
}) => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false)

    useGetDataList(setFilteredData, setData, Url, setLoading);

    function ThrowValues(value) {
        closeModal();
        setObject(value)
    }

    return (
        <BasicModalStyle>
            <div>
                <CloseButton onClick={closeModal}>
                    <AiOutlineClose />
                </CloseButton>
                <BasicFilterElement
                    label1='Código'
                    dataList={data}
                    setFilteredDataList={setFilteredData}
                />
                <TablePrimary
                    data={filteredData}
                    setValueFunction={ThrowValues}
                    loading={loading}
                    setValueObject={setObject !== null}
                    columns={[
                        { label: "ID", filed: primaryValue },
                        { label: "Nome", filed: secondValue }
                    ]}
                />
            </div>
        </BasicModalStyle>
    );
}

export default BasicModal;
