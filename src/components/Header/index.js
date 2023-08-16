import React, { useState } from 'react';
import { HeaderContainer, OptionsForSectionContainer, TitleSectionButton } from './HeaderStyle';
import { TopMenuSectionsTitles } from './TopMenuSectionsTitles';
import OptionsForSection from './OptionsForSection';

const Header = () => {
    const [currentSection, setCurrentSection] = useState('');

    function SetSection(item) {
        if (currentSection !== item) {
            return setCurrentSection(item)
        }

        setCurrentSection('')
    }

    return (
        <HeaderContainer>
            {TopMenuSectionsTitles.map(item => (
                <div key={item}>
                    <TitleSectionButton
                        isSelected={item === currentSection}
                        onClick={() => SetSection(item)}
                    >
                        {item}
                    </TitleSectionButton>
                    {currentSection === item && (
                        <OptionsForSection currentSection={currentSection} />
                    )}
                </div>
            ))}
        </HeaderContainer>
    );
}

export default Header;
