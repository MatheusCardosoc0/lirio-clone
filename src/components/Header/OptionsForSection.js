import React from 'react';
import { OptionsForSectionContainer } from './HeaderStyle';
import { OptionsForSectionConstants, TopMenuSectionsTitles } from './TopMenuSectionsTitles';
import { Link } from 'react-router-dom';

const OptionsForSection = ({ currentSection }) => {

    console.log(OptionsForSectionConstants[currentSection])

    return (
        <OptionsForSectionContainer>
            {OptionsForSectionConstants[currentSection].map(item => (
                <Link
                    key={item}
                    to={`${currentSection.toLowerCase()}/${item.toLowerCase()}`}
                    isClicked={item === currentSection}

                >
                    {item}
                </Link>
            ))}
        </OptionsForSectionContainer>
    );
}

export default OptionsForSection;
