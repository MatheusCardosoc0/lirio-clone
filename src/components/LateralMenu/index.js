import React from 'react';
import { CloseButton, HelpButtons, InviteButton, LateralMenuContainer } from './LateralMenuStyles';
import { LogoContainer } from '../../styles/Global';
import Logo from '../../assets/Logo.png'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { FaUserFriends, FaBook } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../redux/actions/menuActions';

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

            <CloseButton
                onClick={() => dispatch(toggleMenu())}
            >
                <FaArrowLeft />
            </CloseButton>
        </LateralMenuContainer>
    );
}

export default LateralMenu;
