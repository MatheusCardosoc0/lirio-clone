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
            <div>
                {children}
            </div>
            <footer>
                <ButtonStyle1
                    $color={"linear-gradient(to bottom, #85f100, #02830f)"}
                    $max_width={"140px"}
                    type='submit'
                >
                    Salvar
                </ButtonStyle1>
                {removeFunction && (
                    <ButtonStyle1
                        $color={"linear-gradient(to bottom, #ff0000, #ff2f00)"}
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
