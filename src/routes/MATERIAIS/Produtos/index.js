import React from 'react'
import { Outlet } from 'react-router-dom'
import BasicOptionsContainer from '../../../components/containers/BasicOptionsContainer'
import { clearProductData } from '../../../redux/actions/MATERIAIS/productAction'

const Produtos = () => {

    return (
        <>
            <BasicOptionsContainer
                url={"/materiais/produtos"}
                reduxClearDataFunction={clearProductData}
            />
            <Outlet />
        </>
    )
}

export default Produtos