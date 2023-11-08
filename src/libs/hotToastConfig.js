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
                    width: '200px',
                    backgroundColor: 'yellow',
                    color: 'black',
                },
                icon: false,
                success: {
                    style: {
                        backgroundColor: '#0BDC35',
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