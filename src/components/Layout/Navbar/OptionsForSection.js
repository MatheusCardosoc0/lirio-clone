import React from 'react';
import { OptionsForSectionContainer } from './NavbarStyle';
import { OptionsForSectionConstants } from './TopMenuSectionsTitles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddNewShortcut } from '../../../redux/actions/ShortCutsNavActions';

const OptionsForSection = ({ currentSection, setCurrentSection }) => {

    const navigation = useNavigate()
    const dispatch = useDispatch()

    function SetShortcutAndNavigateToWindow(item) {
        navigation(`${currentSection.toLowerCase()}/${item.toLowerCase()}`)
        setCurrentSection()
        dispatch(AddNewShortcut({ name: item, link: `${currentSection.toLowerCase()}/${item.toLowerCase()}` }))
    }

    return (
        <OptionsForSectionContainer

        >
            {OptionsForSectionConstants[currentSection].map((item, i) => (
                <button
                    key={i}
                    to={() => SetShortcutAndNavigateToWindow(item)}
                    isClicked={item === currentSection}
                    onClick={() => SetShortcutAndNavigateToWindow(item)}
                >
                    {item}
                </button>
            ))}
        </OptionsForSectionContainer>
    );
}

export default OptionsForSection;
