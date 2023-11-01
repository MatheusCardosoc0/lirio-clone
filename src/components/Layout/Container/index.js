import React from 'react';
import { Box, ContentContainer, NamePage, UserBox } from './styles/ContainerStyles';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
        <Box>
            <NamePage>
                {transformUrl(location.pathname)}
                <UserBox>
                    <h3>{userName}</h3>
                    <div />
                </UserBox>
            </NamePage>
            <ContentContainer>
                {children}
            </ContentContainer>
        </Box>
    );
}

export default Container;
