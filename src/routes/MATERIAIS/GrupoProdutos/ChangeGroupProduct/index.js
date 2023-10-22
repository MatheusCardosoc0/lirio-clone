import React from 'react'
import { BasedFormProductGroup } from '../BasedFormProductGroups'
import { useParams } from 'react-router-dom'

const ChangeGroupProduct = () => {

    const { id } = useParams()

    return (
        <BasedFormProductGroup
            id={id}
        />
    )
}

export default ChangeGroupProduct