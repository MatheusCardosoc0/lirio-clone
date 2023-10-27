import React from 'react'
import { useParams } from 'react-router-dom'
import { BasedFormPaymentTerms } from '../BasedFormTerms'

const ChangePaymentTerms = () => {

    const { id } = useParams()

    return (
        <BasedFormPaymentTerms
            id={id}
        />
    )
}

export default ChangePaymentTerms