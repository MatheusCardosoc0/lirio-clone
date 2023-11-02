import React from 'react'
import { OptionButton, OptionsContainer } from './styles/OptionsContainer'
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const BasicOptionsContainer = ({
    children,
    url
}) => {

    const navigation = useNavigate()

    // eslint-disable-next-line no-restricted-globals
    let currentUrlInApp = location.pathname

    return (
        <OptionsContainer >
            {(currentUrlInApp.includes("new") || currentUrlInApp.includes("change")) && (
                <OptionButton $color="blue" onClick={() => navigation(url)}
                    title="Buscar"
                >
                    <AiOutlineSearch />
                </OptionButton>
            )}
            {!currentUrlInApp.includes("new") && (
                <OptionButton $color="green" onClick={() => navigation(url + '/new')}
                    title="Cadastrar novo"
                >
                    <AiOutlinePlus />
                </OptionButton>
            )}
            {children}
        </OptionsContainer >
    )
}

export default BasicOptionsContainer