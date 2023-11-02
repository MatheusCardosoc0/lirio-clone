import React from 'react';
import { PrimaryFormStyle } from './styles/PrimaryFormStyle';
import { ButtonStyle1 } from '../Buttons';

const PrimaryForm = ({
    children,
    onSubmit,
    Title = '',
    removeFunction
}) => {

    return (
        <PrimaryFormStyle onSubmit={onSubmit} >
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
        </PrimaryFormStyle >
    );
}

export default PrimaryForm;
