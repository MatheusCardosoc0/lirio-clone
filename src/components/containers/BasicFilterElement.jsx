import React, { useState } from 'react';
import { InputContainer } from './styles/InputContainer';
import { BasicInput } from '../Inputs';
import { ButtonStyle1 } from '../Buttons';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button, TextField } from '@mui/material';

const BasicFilterElement = ({
    dataList,
    setFilteredDataList,
    label1 = 'ID:',
    label2 = 'Nome:'
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
            <TextField
                label={label1}
                variant='filled'
                onChange={e => setIsSearchTermId(e.target.value)}
                value={isSearchTermId}
            />
            <div>
                <TextField
                    label={label2}
                    variant='filled'
                    onChange={e => setIsSearchTermName(e.target.value)}
                    value={isSearchTermName}
                />
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => filterData()}
                >
                    <AiOutlineSearch
                        size={32}
                    />
                    Buscar
                </Button>
            </div>
        </InputContainer>
    )
}

export default BasicFilterElement;
