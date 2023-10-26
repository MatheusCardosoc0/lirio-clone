import React from 'react'
import { useParams } from 'react-router-dom'
import { BasedFormCoins } from '../BasedFormCoins'

const ChangeCoin = () => {

    const { id } = useParams()

    return (
        <BasedFormCoins
            id={id}
        />
    )
}

export default ChangeCoin