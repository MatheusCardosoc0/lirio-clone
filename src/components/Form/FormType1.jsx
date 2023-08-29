import React from 'react';
import { CloseButton, FormStyle1 } from './styles/FormStyle1';
import { AiOutlineClose } from 'react-icons/ai'
import { ButtonStyle1 } from '../Buttons';
import { useNavigate } from 'react-router-dom';

const FormType1 = ({
    children,
    onSubmit,
    urlCancel,
    urlSave
}) => {

    const navigate = useNavigate()

    return (
        <FormStyle1 onSubmit={onSubmit} >
            <CloseButton onClick={() => navigate(urlCancel)} >
                <AiOutlineClose />
            </CloseButton>
            <header>
                <h2>
                    Cadastro de pessoas
                </h2>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <ButtonStyle1 $color={"green"} $max_width={"140px"}>
                    SALVAR
                </ButtonStyle1>
            </footer>
        </FormStyle1 >
    );
}

export default FormType1;
