import React, { useState } from 'react';
import { ActionsContainer, PrimaryFormStyle } from './styles/PrimaryFormStyle';
import { ButtonStyle1 } from '../Buttons';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { useDispatch } from 'react-redux';

const PrimaryForm = ({
    children,
    onSubmit,
    removeFunction,
    resetFunction
}) => {

    const dispatch = useDispatch()

    const [openDialog, setOpenDialog] = useState(false);
    const [dialogFunction, setDialogFunction] = useState(null);
    const [dialogMessage, setDialogMessage] = useState('');

    function handleOpenDialog(func, message) {
        setDialogFunction(() => func);
        setDialogMessage(message);
        setOpenDialog(true);
    }

    function handleDialogAgree() {
        if (dialogFunction) {
            dialogFunction();
        }
        setOpenDialog(false);
    }

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
                        onClick={() => handleOpenDialog(removeFunction, "Tem certeza de que deseja remover este registro?")}
                    >
                        Remover
                    </Button>
                )}
                {resetFunction && (
                    <Button
                        variant='contained'
                        color="success"
                        type='button'
                        onClick={() => handleOpenDialog(() => dispatch(resetFunction()), "Tem certeza de que deseja resetar os dados do registro?")}
                    >
                        Resetar
                    </Button>
                )}
            </ActionsContainer>
            <Dialog
                open={openDialog}
                keepMounted
                onClose={() => setOpenDialog(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Confirmação"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {dialogMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='text' color='error' onClick={() => setOpenDialog(false)}>Cancelar</Button>
                    <Button variant='text' color='success' onClick={handleDialogAgree}>Confirmar</Button>
                </DialogActions>
            </Dialog>
        </PrimaryFormStyle >
    );
}

export default PrimaryForm;
