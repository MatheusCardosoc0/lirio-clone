import React from 'react'
import { OptionButton, OptionsContainer } from '../../../components/containers'
import { AiOutlinePlus } from 'react-icons/ai'
import { Outlet, useNavigate } from 'react-router-dom'

const GrupoProdutos = () => {

    const navigation = useNavigate()

    return (
        <>
            <OptionsContainer>
                <OptionButton $color="green" onClick={() => navigation("/materiais/grupos de produtos/new_product_group")}
                    title="Cadastrar novo grupo de produtos"
                >
                    <AiOutlinePlus />
                </OptionButton>
            </OptionsContainer>
            <Outlet />
        </>
    )
}

export default GrupoProdutos