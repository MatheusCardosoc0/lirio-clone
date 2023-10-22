import React from 'react'
import { OptionButton, OptionsContainer } from '../../../components/containers'
import { AiOutlinePlus } from 'react-icons/ai'
import { Outlet, useNavigate } from 'react-router-dom'

const Produtos = () => {

    const navigation = useNavigate()

    return (
        <>
            <OptionsContainer>
                <OptionButton $color="green" onClick={() => navigation("/materiais/produtos/new_product")}
                    title="Cadastrar novo produto"
                >
                    <AiOutlinePlus />
                </OptionButton>
            </OptionsContainer>
            <Outlet />
        </>
    )
}

export default Produtos