export const InputStyleConfig = {
    MuiTextField: {
        styleOverrides: {
            root: {
                height: 'auto',
                backgroundColor: '#fff',
                '& .MuiFilledInput-root': {
                    backgroundColor: '#fff',
                    fontSize: '2rem',
                    boxShadow: '0px 0px 2px black',
                    '&:hover': {
                        backgroundColor: '#fff',
                    }
                },
                '& .MuiOutlinedInput-root': {
                    color: 'transparent',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    minWidth: '100%',
                    '& fieldset': {
                        border: '4px solid black',
                    },
                    '&.Mui-focused': {
                        color: 'black'
                    },
                    '&.Mui-focused fieldset': {
                        border: '4px solid #0B55FF',
                    },
                    '&:not(.Mui-focused)': {
                        color: 'black',
                    },
                },
                borderRadius: '8px',
                width: '100%',
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                fontSize: '2rem',
            },
        },
    },
    MuiInputLabel: {
        styleOverrides: {
            root: {
                fontSize: '2rem',
                transform: 'translate(14px, 2px) scale(0.75)',
                fontWeight: 'bold',
                color: '#505050',
                '&.Mui-focused': {
                    color: '#0B55FF',
                    fontSize: '2rem',
                    transform: 'translate(14px, -6px) scale(0.75)',
                },
                '&.MuiInputLabel-filled': {
                    fontSize: '3rem'
                },
                '&.MuiInputLabel-shrink': {
                },
            },
        },
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                fontSize: '1.2rem',
                borderRadius: '8px',
                padding: '4px',
                fontWeight: 'bold',
                minWidth: '100px'
            }
        }
    }
}