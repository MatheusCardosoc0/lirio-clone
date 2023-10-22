import React, { useState } from 'react';
import { HeaderContainer, OptionsForSectionContainer, TitleSectionButton } from './styles/HeaderStyle';
import { TopMenuSectionsTitles } from './utils/TopMenuSectionsTitles';
import OptionsForSection from './components/OptionsForSection';

const Navbar = () => {
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
                        <OptionsForSection
                            currentSection={currentSection}
                            setCurrentSection={() => setCurrentSection('')}
                        />
                    )}
                </div>
            ))}
        </HeaderContainer>
    );
}

export default Navbar;
