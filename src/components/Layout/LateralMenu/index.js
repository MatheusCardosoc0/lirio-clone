import React from 'react';
import { LateralMenuContainer, ShortcutsContainer } from './LateralMenuStyles';
import { CgShapeTriangle } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LateralMenu = () => {

    const currentShortcuts = useSelector(state => state.shortcutsManagement.shortcuts)

    console.log(currentShortcuts)

    return (
        <LateralMenuContainer>
            <CgShapeTriangle />
            <ShortcutsContainer>
                {currentShortcuts.map((item, i) => (
                    <Link
                        key={i}
                        to={item.link}
                    >
                        {item.name}
                    </Link>
                ))}
            </ShortcutsContainer>
        </LateralMenuContainer>
    );
}

export default LateralMenu;
