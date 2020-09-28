import React, { useEffect } from 'react';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { red } from '@material-ui/core/colors';

import {
	MuiThemeProvider,
	createMuiTheme,
	Theme,
	StylesProvider,
} from '@material-ui/core';
import { NextWithApollo } from 'config';
import { DocumentHead } from 'components';
import 'typeface-pacifico'; // logo font

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

interface MyAppProps extends AppProps {
	apollo: ApolloClient<unknown>;
}
const MyApp = ({ pageProps, apollo, Component }: MyAppProps): JSX.Element => {
	// Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}, []);

	return (
		<ApolloProvider client={apollo}>
			<StylesProvider injectFirst>
				<MuiThemeProvider theme={theme}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<DocumentHead />
						<Component {...pageProps} />
					</ThemeProvider>
				</MuiThemeProvider>
			</StylesProvider>
		</ApolloProvider>
	);
};

export default NextWithApollo(MyApp);
