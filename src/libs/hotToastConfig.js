import { Toaster } from "react-hot-toast"

export const CustomToaster = () => {
    return (
        <Toaster
            position='bottom-right'
            gutter={8}
            reverseOrder={false}
            toastOptions={{
                duration: 2500,
                style: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    width: '244px',
                    backgroundColor: 'yellow',
                    color: 'black',
                },
                icon: false,
                success: {
                    style: {
                        backgroundColor: 'green',
                        color: 'white',
                    }
                },
                error: {
                    duration: 5000,
                    style: {
                        backgroundColor: 'red',
                        color: 'white'
                    }
                }
            }}
        />
    )
}