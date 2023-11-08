import React from 'react';
import { ActionsContainer, PrimaryFormStyle } from './styles/PrimaryFormStyle';
import { ButtonStyle1 } from '../Buttons';
import { Button } from '@mui/material';

const PrimaryForm = ({
    children,
    onSubmit,
    removeFunction
}) => {

    return (
        <PrimaryFormStyle onSubmit={onSubmit} >
            {children}
            <ActionsContainer>
                <Button
                    variant='contained'
                    type='submit'
                >
                    Salvar
                </Button>
                {removeFunction && (
                    <Button
                        variant='contained'
                        color="error"
                        type='button'
                        onClick={removeFunction}
                    >
                        Remover
                    </Button>
                )}
            </ActionsContainer>
        </PrimaryFormStyle >
    );
}

export default PrimaryForm;
