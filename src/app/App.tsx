import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import ReactNotification from 'react-notifications-component';

import { GlobalStyles } from 'components';
import { getApolloClient, getRoutes } from 'config';

import 'rsuite/lib/styles/index.less'; // rsuite styles
import 'typeface-pacifico'; // logo font
import 'react-notifications-component/dist/theme.css';

export function App() {
    const routes = getRoutes();
    const client = getApolloClient();

    return (
        <ApolloProvider client={client}>
            <Router>
                <GlobalStyles />
                <ReactNotification />
                {routes}
            </Router>
        </ApolloProvider>
    );
}
