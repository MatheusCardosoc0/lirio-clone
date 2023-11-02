import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
      <Toaster
        position='top-right'
        gutter={8}
        reverseOrder={false}
        toastOptions={{
          duration: 2500,
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
          },
          success: {
            style: {
              backgroundColor: '#0BDC35',
              color: 'white'
            },
            iconTheme: {
              primary: 'white',
              secondary: '#0BDC35'
            }
          },
          error: {
            duration: 5000,
            style: {
              backgroundColor: 'red',
              color: 'white'
            },
            iconTheme: {
              primary: 'white',
              secondary: 'red'
            }
          }
        }}
      />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
