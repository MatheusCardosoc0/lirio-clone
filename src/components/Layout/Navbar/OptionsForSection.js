import React from 'react';
import { OptionsForSectionContainer } from './NavbarStyle';
import { OptionsForSectionConstants } from './TopMenuSectionsTitles';
import { Link } from 'react-router-dom';

const OptionsForSection = ({ currentSection, setCurrentSection }) => {

    return (
        <OptionsForSectionContainer

        >
            {OptionsForSectionConstants[currentSection].map(item => (
                <Link
                    key={item}
                    to={`${currentSection.toLowerCase()}/${item.toLowerCase()}`}
                    isClicked={item === currentSection}
                    onClick={setCurrentSection}

                >
                    {item}
                </Link>
            ))}
        </OptionsForSectionContainer>
    );
}

export default OptionsForSection;
