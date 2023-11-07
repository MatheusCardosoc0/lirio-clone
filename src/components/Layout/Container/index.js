import React from 'react';
import { Box, ContentContainer, NamePage, SeparateContainer, UserBox } from './ContainerStyles';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LateralMenu from '../LateralMenu';

const Container = ({ children }) => {

    function transformUrl(url) {
        const urlDecode = url.replace(/%20/g, ' ');

        const pats = urlDecode.split('/');

        if (pats.length < 3) return pats[pats.length - 1];

        const word = pats[2];

        let wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1);

        if (url.includes("new")) {
            wordCapitalized = wordCapitalized + ' |  NOVO'
        }
        else if (url.includes("change")) {
            wordCapitalized = wordCapitalized + ' |  ALTERAR'
        }
        else {
            wordCapitalized = wordCapitalized + ' |  PESQUISA'
        }

        return wordCapitalized;
    }

    const location = useLocation()

    const userName = useSelector(state => state.user.userName)

    return (
        <SeparateContainer>
            <LateralMenu />
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
