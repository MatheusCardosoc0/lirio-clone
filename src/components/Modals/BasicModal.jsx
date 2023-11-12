import React, { useState } from 'react';
import { BasicModalStyle } from './BasicModalStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { BasicFilterElement } from '../containers';
import { TablePrimary } from '../Table';
import { useGetDataList } from '../../functions/useGetDataList';
import { CloseButton } from '../Buttons';

const BasicModal = ({
    setValue,
    keys = null,
    setObject,
    setValueId,
    setValueName,
    closeModal,
    Url,
    primaryValue = "id",
    secondValue = "name"
}) => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useGetDataList(setFilteredData, setData, Url);

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
