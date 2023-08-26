import React from 'react';
import { BasicInput } from '../../../components/Inputs';
import { AiOutlineSearch } from 'react-icons/ai'
import { InputContainer } from './styles/InputContainer';
import { ButtonStyle1 } from '../../../components/Buttons';
import { PersonContainer } from './styles/PersonContainer';

const PessoasPage = () => {
    return (
        <PersonContainer>
            <InputContainer>
                <BasicInput max label={"Id"} />
                <div>
                    <BasicInput max label={"Nome"} />
                    <ButtonStyle1>
                        <AiOutlineSearch />
                        Filtrar
                    </ButtonStyle1>
                </div>
            </InputContainer>

            <InputContainer>
                <BasicInput max label={"Id"} />
                <div>
                    <BasicInput max label={"Nome"} />
                    <ButtonStyle1>
                        <AiOutlineSearch />
                        Filtrar
                    </ButtonStyle1>
                </div>
            </InputContainer>

            <InputContainer>
                <BasicInput max label={"Id"} />
                <div>
                    <BasicInput max label={"Nome"} />
                    <ButtonStyle1>
                        <AiOutlineSearch />
                        Filtrar
                    </ButtonStyle1>
                </div>
            </InputContainer>

            <InputContainer>
                <BasicInput max label={"Id"} />
                <div>
                    <BasicInput max label={"Nome"} />
                    <ButtonStyle1>
                        <AiOutlineSearch />
                        Filtrar
                    </ButtonStyle1>
                </div>
            </InputContainer>

            <InputContainer>
                <BasicInput max label={"Id"} />
                <div>
                    <BasicInput max label={"Nome"} />
                    <ButtonStyle1>
                        <AiOutlineSearch />
                        Filtrar
                    </ButtonStyle1>
                </div>
            </InputContainer>

            <InputContainer>
                <BasicInput max label={"Id"} />
                <div>
                    <BasicInput max label={"Nome"} />
                    <ButtonStyle1>
                        <AiOutlineSearch />
                        Filtrar
                    </ButtonStyle1>
                </div>
            </InputContainer>

            <InputContainer>
                <BasicInput max label={"Id"} />
                <div>
                    <BasicInput max label={"Nome"} />
                    <ButtonStyle1>
                        <AiOutlineSearch />
                        Filtrar
                    </ButtonStyle1>
                </div>
            </InputContainer>

            <InputContainer>
                <BasicInput max label={"Id"} />
                <div>
                    <BasicInput max label={"Nome"} />
                    <ButtonStyle1>
                        <AiOutlineSearch />
                        Filtrar
                    </ButtonStyle1>
                </div>
            </InputContainer>
        </PersonContainer>
    );
}

export default PessoasPage;
