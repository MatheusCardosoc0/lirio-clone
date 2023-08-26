import React from 'react';
import { Box, NamePage } from './styles/ContainerStyles';
import { useLocation } from 'react-router-dom';

const Container = ({ children }) => {

    function transformUrl(url) {
        const urlDecode = url.replace(/%20/g, ' ');

        const pats = urlDecode.split('/');

        // Retorna a última parte da URL se houver menos de 3 segmentos
        if (pats.length < 3) return pats[pats.length - 1];

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
