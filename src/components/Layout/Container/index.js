import React from 'react';
import { Box, ContentContainer, NamePage, SeparateContainer, UserBox } from './styles/ContainerStyles';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LateralMenu from '../LateralMenu';

const Container = ({ children }) => {

    function transformUrl(url) {
        const urlDecode = url.replace(/%20/g, ' ');

        const pats = urlDecode.split('/');

        if (pats.length < 3) return pats[pats.length - 1];

        const word = pats[2];

        const wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1);

        return wordCapitalized;
    }

    const location = useLocation()

    const userName = useSelector(state => state.user.userName)

    return (
        <SeparateContainer>
            <LateralMenu>

            </LateralMenu>
            <Box>
                <NamePage>
                    <h2>
                        {transformUrl(location.pathname)}
                    </h2>
                    <UserBox>
                        <h3>{userName}</h3>
                        <div />
                    </UserBox>
                </NamePage>
                <ContentContainer>
                    {children}
                </ContentContainer>
            </Box>
        </SeparateContainer>
    );
}

export default Container;
