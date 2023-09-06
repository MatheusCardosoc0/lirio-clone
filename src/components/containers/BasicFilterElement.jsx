import React from 'react';
import { InputContainer } from './styles/InputContainer';
import { BasicInput } from '../Inputs';
import { useDispatch, useSelector } from 'react-redux';
import { SearchTermPersonId, SearchTermPersonName } from '../../redux/actions/personActions';
import { ButtonStyle1 } from '../Buttons';
import { AiOutlineSearch } from 'react-icons/ai';

const BasicFilterElement = ({
    dataList,
    setFilteredDataList
}) => {
    const dispatch = useDispatch();

    const handleSetSearchTermName = (str) => {
        dispatch(SearchTermPersonName(str));
    };

    const handleSetSearchTermId = (str) => {
        dispatch(SearchTermPersonId(str));
    };

    const isSearchTermName = useSelector(state => state.pessoal.searchTermName)
    const isSearchTermId = useSelector(state => state.pessoal.searchTermId)

    const filterPerson = () => {
        const filter = dataList.filter(person =>
            person.id.toLowerCase().includes(isSearchTermId.toLowerCase()) && person.name.toLowerCase().includes(isSearchTermName.toLowerCase())
        );

        setFilteredDataList(filter);
    };

    return (
        <InputContainer>
            <BasicInput
                label={"Id"}
                $isLarge
                onChange={e => handleSetSearchTermId(e.target.value)}
                value={isSearchTermId}
            />
            <div>
                <BasicInput
                    max label={"Nome"}
                    onChange={e => handleSetSearchTermName(e.target.value)}
                    value={isSearchTermName}
                />
                <ButtonStyle1
                    onClick={() => filterPerson()} // Corrigido
                >
                    <AiOutlineSearch />
                    Filtrar
                </ButtonStyle1>
            </div>
        </InputContainer>
    )
}

export default BasicFilterElement;
