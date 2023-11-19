import React from 'react'
import { OptionButton, OptionsContainer } from './styles/OptionsContainer'
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddNewShortcut } from '../../redux/actions/ShortCutsNavActions'
import { capitalizeFirstLetter } from '../../functions/util/capitalizeFirstLetter'

const BasicOptionsContainer = ({
    children,
    url,
    reduxClearDataFunction
}) => {

    const navigation = useNavigate()
    const dispatch = useDispatch()

    const extractNameFromUrl = (url) => {
        const segments = url.split('/').filter(segment => segment);

        let name;
        if (segments.length > 2 && (segments[segments.length - 1] === 'new' || segments[segments.length - 1] === 'change')) {
            name = segments[segments.length - 2];
        } else {
            name = segments[segments.length - 1] || '';
        }

        return capitalizeFirstLetter(name);
    };

    // eslint-disable-next-line no-restricted-globals
    let currentUrlInApp = location.pathname

    function NavigateAndClearData(subSession = '') {
        if (reduxClearDataFunction && (currentUrlInApp.includes("new") || currentUrlInApp.includes("change"))) {
            dispatch(reduxClearDataFunction());
        }
        const fullPath = url + subSession;
        navigation(fullPath);

        const sessionName = extractNameFromUrl(fullPath);
        const name = subSession ? sessionName + ` ${subSession.replace("/", "")}` : sessionName
        dispatch(AddNewShortcut({ name, link: fullPath }));
    }

    return (
        <OptionsContainer >
            {(currentUrlInApp.includes("new") || currentUrlInApp.includes("change")) && (
                <OptionButton
                    $color="blue"
                    onClick={() => NavigateAndClearData()}
                    title="Buscar"
                >
                    <AiOutlineSearch />
                </OptionButton>
            )}
            {!currentUrlInApp.includes("new") && (
                <OptionButton
                    $color="green"
                    onClick={() => NavigateAndClearData("/new")}
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