import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import {
    MuiThemeProvider,
    createMuiTheme,
    Theme,
    StylesProvider,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { red } from '@material-ui/core/colors';

const theme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
};

export default MyApp;
