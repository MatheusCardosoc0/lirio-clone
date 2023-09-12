import React, { useState } from 'react';
import { BasicModalStyle } from './styles/BasicModalStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { BasicFilterElement } from '../containers';
import { TablePrimary } from '../Table';
import { useGetDataList } from '../../functions/useGetDataList';
import { CloseButton } from '../Buttons';

const BasicModal = ({
    setValue,
    setObject,
    setValueId,
    setValueName,
    closeModal,
    Url,
    filed1,
    filed2
}) => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useGetDataList(setFilteredData, setData, Url);

    function ThrowValues(id, name, object) {
        closeModal();

        if (typeof setObject === "function") {
            setObject(object);
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
                    label1='COD. IBGE'
                    dataList={data}
                    setFilteredDataList={setFilteredData}
                />
                <TablePrimary
                    data={filteredData}
                    setValueFunction={ThrowValues}
                    setValueObject={setObject !== null}
                    columns={[
                        { label: "ID", filed: filed1 },
                        { label: "Nome", filed: filed2 }
                    ]}
                />
            </div>
        </BasicModalStyle>
    );
}

export default BasicModal;
