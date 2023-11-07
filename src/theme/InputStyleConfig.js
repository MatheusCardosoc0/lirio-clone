export const InputStyleConfig = {
    MuiTextField: {
        styleOverrides: {
            root: {
                height: 'auto',
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'black',
                    },
                    '&:hover fieldset': {
                        borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'black',
                    },
                },
                borderRadius: '4px',
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
                '&.Mui-focused,  &.MuiFormLabel-filled': {
                    color: 'black',
                    fontSize: '1.2rem',
                    transform: 'translate(12px, -6px) scale(0.75)',
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