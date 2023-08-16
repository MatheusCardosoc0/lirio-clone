import React from 'react';
import { Box, NamePage } from './ContainerStyles';
import { useLocation } from 'react-router-dom';

const Container = ({ children }) => {

    function transformUrl(url) {
        const urlDecode = url.replace(/%20/g, ' ');

        const pats = urlDecode.split('/');

        if (pats.length < 3) return urlDecode;

        const word = pats[2];

        const wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1);

        return wordCapitalized;
    }

    const location = useLocation()

    return (
        <Box>
            <NamePage>
                {transformUrl(location.pathname)}
            </NamePage>
            {children}
        </Box>
    );
}

export default Container;
