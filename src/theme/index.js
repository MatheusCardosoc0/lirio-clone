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
                        backgroundColor: '#125AFF',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#1244B9',
                        },
                    },
                    '&.MuiButton-containedSuccess': {
                        backgroundColor: '#CE00BA',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#A20092',
                        },
                    },
                }
            },
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#525252'
                }
            }
        }
    },
});
