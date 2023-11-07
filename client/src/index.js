import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styles from './index.css'
import AuthProvider from './providers/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App className={styles.dark_theme} />
    </AuthProvider>
  </React.StrictMode> 
);
