import React from 'react';
import { ActionsContainer, PrimaryFormStyle } from './styles/PrimaryFormStyle';
import { ButtonStyle1 } from '../Buttons';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

const PrimaryForm = ({
    children,
    onSubmit,
    removeFunction,
    resetFunction
}) => {

    const dispatch = useDispatch()

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
                {resetFunction && (
                    <Button
                        variant='contained'
                        color="success"
                        type='button'
                        onClick={() => dispatch(resetFunction())}
                    >
                        Resetar
                    </Button>
                )}
            </ActionsContainer>
        </PrimaryFormStyle >
    );
}

export default PrimaryForm;
