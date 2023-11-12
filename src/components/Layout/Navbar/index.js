import React, { useState } from 'react';
import { HeaderContainer, LogoutButton, TitleSectionButton } from './NavbarStyle';
import { TopMenuSectionsTitles } from './TopMenuSectionsTitles';
import OptionsForSection from './OptionsForSection';

const Navbar = () => {
    const [currentSection, setCurrentSection] = useState('');

    function SetSection(item) {
        if (currentSection !== item) {
            return setCurrentSection(item)
        }

        setCurrentSection('')
    }

    function logOut() {
        localStorage.removeItem("authToken")
        window.location.reload()
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
            <LogoutButton
                onClick={() => logOut()}
            >
                Sair
            </LogoutButton>
        </HeaderContainer>
    );
}

export default Navbar;
