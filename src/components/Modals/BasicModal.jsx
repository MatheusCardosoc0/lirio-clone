import React, { useState } from 'react';
import { BasicModalStyle } from './styles/BasicModalStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { BasicFilterElement } from '../containers';
import { TablePrimary } from '../Table';
import { useGetDataList } from '../../functions/useGetDataList';
import { CloseButton } from '../Buttons';

const BasicModal = ({
    setValue,
    setValueId,
    setValueName,
    closeModal,
    IDForUrl
}) => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useGetDataList(setFilteredData, setData, `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${IDForUrl}/municipios`);

    function ThrowValues(id, name) {
        closeModal();

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
                    columns={[
                        { label: "ID", filed: "id" },
                        { label: "Nome", filed: "nome" }
                    ]}
                />
            </div>
        </BasicModalStyle>
    );
}

export default BasicModal;
