import React from 'react';
import { render } from 'react-dom';
import { App } from 'app';
import * as serviceWorker from './serviceWorker';

const RootComponent = () => (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const rootElement = document.querySelector('#root');

render(<RootComponent />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
