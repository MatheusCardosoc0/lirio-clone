import React, { useState } from 'react';
import { BasicModalStyle } from './styles/BasicModalStyle';
import { AiOutlineClose } from 'react-icons/ai'
import { BasicFilterElement } from '../containers';
import { TablePrimary } from '../Table';
import { useGetDataList } from '../../functions/useGetDataList';

const BasicModal = ({
    closeModal,
    IDForUrl
}) => {

    const [citiesForIBGEApi, setCitiesForIBGEApi] = useState([])
    const [filteredCitiesForIBGEApi, setFilteredCitiesForIBGEApi] = useState([])

    useGetDataList(setFilteredCitiesForIBGEApi, setCitiesForIBGEApi, `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${IDForUrl}/municipios`)

    return (
        <BasicModalStyle>
            <div>
                <button onClick={closeModal} >
                    <AiOutlineClose />
                </button>

                <BasicFilterElement
                    label1='COD. IBGE'
                    dataList={citiesForIBGEApi}
                    setFilteredDataList={setFilteredCitiesForIBGEApi}
                />
                <TablePrimary
                    data={filteredCitiesForIBGEApi}
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
