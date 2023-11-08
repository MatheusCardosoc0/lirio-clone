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
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    '& fieldset': {
                        border: '4px solid black',
                    },
                    '&.Mui-focused fieldset': {
                        border: '4px solid #0B55FF',
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
                fontWeight: 'bold',
                color: 'black',
                '&.Mui-focused': {
                    color: '#0B55FF',
                    fontSize: '2rem',
                    transform: 'translate(14px, -6px) scale(0.75)',
                },
                '&.MuiInputLabel-filled': {
                    fontSize: '3rem'
                },
            },
        },
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                fontSize: '1rem'
            }
        }
    }
}