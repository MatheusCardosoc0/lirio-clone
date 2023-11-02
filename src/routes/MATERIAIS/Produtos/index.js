import React from 'react'
import { Outlet } from 'react-router-dom'
import BasicOptionsContainer from '../../../components/containers/BasicOptionsContainer'

const Produtos = () => {

    return (
        <>
            <BasicOptionsContainer url={"/materiais/produtos"} />
            <Outlet />
        </>
    )
}

export default Produtos