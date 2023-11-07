import { createTheme } from '@mui/material/styles';
import { InputStyleConfig } from './InputStyleConfig'

export const theme = createTheme({
    components: {
        ...InputStyleConfig,
        MuiButton: {
            styleOverrides: {
                root: {
                    width: '100%',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    '&.MuiButton-containedPrimary': {
                        backgroundColor: '#34C100',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#248600',
                        },
                    },
                    '&.MuiButton-containedSecondary': {
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#c82333',
                        },
                    },
                }
            },
        },
    },
});
