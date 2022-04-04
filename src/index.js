import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import './style/variables.css';
import './style/index.css';
import './style/about.css';
import './style/navbar.css';
import './style/home.css';
import './style/loading.css';
import './style/searchForm.css';
import './style/singleCocktail.css';
import './style/cocktailList.css';
import './style/error.css';
import './style/cocktail.css';

import App from './App';
import { AppProvider } from './context';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
// swDev();
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker
//             .register('./serviceWorker.js')
//             .then((reg) => {
//                 console.log('działa', reg);
//             })
//             .catch((err) => {
//                 console.log('Error: ', err);
//             });
//     });
// }
