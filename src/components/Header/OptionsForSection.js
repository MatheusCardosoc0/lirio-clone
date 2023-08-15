import React from 'react';
import { OptionsForSectionContainer } from './HeaderStyle';
import { OptionsForSectionConstants, TopMenuSectionsTitles } from './TopMenuSectionsTitles';

const OptionsForSection = ({ currentSection }) => {

    console.log(OptionsForSectionConstants[currentSection])

    return (
        <OptionsForSectionContainer>
            {OptionsForSectionConstants[currentSection].map(item => (
                <a key={item}>
                    {item}
                </a>
            ))}
        </OptionsForSectionContainer>
    );
}

export default OptionsForSection;
