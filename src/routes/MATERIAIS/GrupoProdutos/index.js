import React from 'react'
import { Outlet } from 'react-router-dom'
import BasicOptionsContainer from '../../../components/containers/BasicOptionsContainer'

const GrupoProdutos = () => {

    return (
        <>
            <BasicOptionsContainer url={"/materiais/grupos de produtos"} />
            <Outlet />
        </>
    )
}

export default GrupoProdutos