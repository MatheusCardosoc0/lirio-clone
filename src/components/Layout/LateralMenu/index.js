import React from 'react';
import { LateralMenuContainer, ShortcutsContainer } from './LateralMenuStyles';
import { CgShapeTriangle } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AddNewShortcut } from '../../../redux/actions/ShortCutsNavActions';

const LateralMenu = () => {

    const currentShortcuts = useSelector(state => state.shortcutsManagement.shortcuts)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    function NavigateToSession(item) {
        dispatch(AddNewShortcut({ name: item.name, link: item.link }))
        navigate(item.link)
    }

    return (
        <LateralMenuContainer>
            <CgShapeTriangle
                onClick={() => navigate("/")}
            />
            <ShortcutsContainer>
                {currentShortcuts.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => NavigateToSession(item)}
                    >
                        {item.name}
                    </button>
                ))}
            </ShortcutsContainer>
        </LateralMenuContainer>
    );
}

export default LateralMenu;
