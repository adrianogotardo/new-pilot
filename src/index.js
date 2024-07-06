import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import './reset.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ToastContainer />
          <App />
        </HashRouter>
      </ThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
