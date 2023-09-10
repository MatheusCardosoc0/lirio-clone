import React, { useState } from 'react';
import { InputContainer } from './styles/InputContainer';
import { BasicInput } from '../Inputs';
import { ButtonStyle1 } from '../Buttons';
import { AiOutlineSearch } from 'react-icons/ai';

const BasicFilterElement = ({
    dataList,
    setFilteredDataList,
    label1 = 'ID',
    label2 = 'Nome'
}) => {
    const [isSearchTermId, setIsSearchTermId] = useState('')
    const [isSearchTermName, setIsSearchTermName] = useState('')

    const filterData = () => {
        const filter = dataList.filter(Data => {
            const id = String(Data.id).toLowerCase();
            const nameOrNome = Data.name ? Data.name.toLowerCase() : Data.nome ? Data.nome.toLowerCase() : '';
            return id.includes(isSearchTermId.toLowerCase()) && nameOrNome.includes(isSearchTermName.toLowerCase());
        });

        setFilteredDataList(filter);
    };

    return (
        <InputContainer>
            <BasicInput
                label={label1}
                $isLarge
                onChange={e => setIsSearchTermId(e.target.value)}
                value={isSearchTermId}
            />
            <div>
                <BasicInput
                    max
                    label={label2}
                    onChange={e => setIsSearchTermName(e.target.value)}
                    value={isSearchTermName}
                />
                <ButtonStyle1
                    onClick={() => filterData()} // Corrigido
                >
                    <AiOutlineSearch />
                    Filtrar
                </ButtonStyle1>
            </div>
        </InputContainer>
    )
}

export default BasicFilterElement;
