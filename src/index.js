import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import './reset.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
