import React from 'react';
import { HelpButtons, InviteButton, LateralMenuContainer } from './LateralMenuStyles';
import { LogoContainer } from '../styles/Global';
import Logo from '../../assets/Logo.png'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { FaUserFriends, FaBook } from 'react-icons/fa'

const LateralMenu = () => {
    return (
        <LateralMenuContainer>
            <div>
                <LogoContainer src={Logo} />
                <InviteButton>
                    <RiMoneyDollarCircleFill />
                    <span>Indique e ganhe por isso.</span>
                </InviteButton>
                <HelpButtons>
                    <button>
                        <FaUserFriends />
                        <span>Base de conhecimento</span>
                    </button>
                    <button>
                        <FaBook />
                        <span>Contatar suporte</span>
                    </button>
                </HelpButtons>
            </div>
        </LateralMenuContainer>
    );
}

export default LateralMenu;
