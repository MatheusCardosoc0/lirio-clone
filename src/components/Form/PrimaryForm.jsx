import React from 'react';
import { ActionsContainer, PrimaryFormStyle } from './styles/PrimaryFormStyle';
import { ButtonStyle1 } from '../Buttons';

const PrimaryForm = ({
    children,
    onSubmit,
    removeFunction
}) => {

    return (
        <PrimaryFormStyle onSubmit={onSubmit} >
            {children}
            <ActionsContainer>
                <ButtonStyle1
                    $color={"linear-gradient(to bottom, #85f100, #02830f)"}
                    type='submit'
                >
                    Salvar
                </ButtonStyle1>
                {removeFunction && (
                    <ButtonStyle1
                        $color={"linear-gradient(to bottom, #ff0000, #ff2f00)"}
                        type='button'
                        onClick={removeFunction}
                    >
                        Remover
                    </ButtonStyle1>
                )}
            </ActionsContainer>
        </PrimaryFormStyle >
    );
}

export default PrimaryForm;
