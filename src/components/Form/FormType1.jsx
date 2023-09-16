import React from 'react';
import { FormStyle1 } from './styles/FormStyle1';
import { AiOutlineClose } from 'react-icons/ai'
import { ButtonStyle1, CloseButton } from '../Buttons';
import { useNavigate } from 'react-router-dom';

const FormType1 = ({
    children,
    onSubmit,
    urlCancel,
    Title = '',
    removeFunction
}) => {

    const navigate = useNavigate()

    return (
        <FormStyle1 onSubmit={onSubmit} >
            <CloseButton onClick={() => navigate(urlCancel)} >
                <AiOutlineClose />
            </CloseButton>
            <header>
                <h2>
                    {Title}
                </h2>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <ButtonStyle1
                    $color={"green"}
                    $max_width={"140px"}
                    type='submit'
                >
                    Salvar
                </ButtonStyle1>
                {removeFunction && (
                    <ButtonStyle1
                        $color={"red"}
                        $max_width={"140px"}
                        type='button'
                        onClick={removeFunction}
                    >
                        Remover
                    </ButtonStyle1>
                )}
            </footer>
        </FormStyle1 >
    );
}

export default FormType1;
