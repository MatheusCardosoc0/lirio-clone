import React from 'react';
import { CloseButton, HelpButtons, InviteButton, LateralMenuContainer, LogoContainer } from './styles/LateralMenuStyles';
import Logo from '../../../assets/Logo.png'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { FaUserFriends, FaBook } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../../redux/actions/menuActions';
import { BiSolidDashboard } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const LateralMenu = () => {

    const dispatch = useDispatch()

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

            <CloseButton
                onClick={() => dispatch(toggleMenu())}
                title='Fechar menu lateral'
            >
                <FaArrowLeft />
            </CloseButton>
        </LateralMenuContainer>
    );
}

export default LateralMenu;
