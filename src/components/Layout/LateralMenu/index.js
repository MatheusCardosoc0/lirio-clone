import React from 'react';
import { HelpButtons, InviteButton, LateralMenuContainer, LogoContainer } from './styles/LateralMenuStyles';
import Logo from '../../../assets/Logo.png'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { FaUserFriends, FaBook } from 'react-icons/fa'
import { BiSolidDashboard } from 'react-icons/bi'
import { Link } from 'react-router-dom';

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
                    <Link to={"/"} >
                        <BiSolidDashboard />
                        <span>Dashboard</span>
                    </Link>
                    <button>
                        <FaBook />
                        <span>Base de conhecimento</span>
                    </button>
                    <button>
                        <FaUserFriends />
                        <span>Contatar suporte</span>
                    </button>
                </HelpButtons>
            </div>
        </LateralMenuContainer>
    );
}

export default LateralMenu;
