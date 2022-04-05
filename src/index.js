import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AppProvider } from './context';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./serviceWorker.js')
            .then((reg) => {})
            .catch((err) => {
                console.log('Error: ', err);
            });
    });
}
