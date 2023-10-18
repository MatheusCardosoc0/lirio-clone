import React, { useState } from 'react';
import { BasicModalStyle } from './styles/BasicModalStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { BasicFilterElement } from '../containers';
import { TablePrimary } from '../Table';
import { useGetDataList } from '../../functions/useGetDataList';
import { CloseButton } from '../Buttons';

const BasicModal = ({
    setValue,
    keys = ["id", "name"],
    setObject,
    setValueId,
    setValueName,
    closeModal,
    Url,
    primaryValue = "id",
    secondValue = "name",
    isUseGetAllValue
}) => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useGetDataList(setFilteredData, setData, Url);

    function ThrowValues(id, name, value) {
        closeModal();

        let transformedObject = {
            [keys[0]]: value[primaryValue],
            [keys[1]]: value[secondValue]
        };

        if (typeof setObject === "function") {
            if (isUseGetAllValue) {
                setObject(value)
            } else {
                setObject(prevValue => ({ ...prevValue, ...transformedObject }));
            }
            return;
        }

        if (typeof setValue === "function") {
            setValue(String(id), name);
            return;
        }

        if (typeof setValueId === "function") {
            setValueId(String(id));
        }
        if (typeof setValueName === "function") {
            setValueName(name);
        }
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
