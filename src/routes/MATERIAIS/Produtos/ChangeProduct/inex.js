import React from 'react'
import BasedFormProduct from '../BasedFormProduct'
import { useParams } from 'react-router-dom'

const ChangeProduct = () => {

    const { id } = useParams()

    return (
        <BasedFormProduct
            id={id}
        />
    )
}

export default ChangeProduct