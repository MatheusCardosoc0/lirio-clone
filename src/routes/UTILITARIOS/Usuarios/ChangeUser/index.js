import React from 'react'
import BasedFormUser from '../BasedFormUser'
import { useParams } from 'react-router-dom'

const ChangeUser = () => {

    const { id } = useParams()

    return (
        <BasedFormUser id={id} />
    )
}

export default ChangeUser