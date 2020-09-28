import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { NextWithApollo } from 'config';
import { DocumentHead } from 'components';
import { theme } from 'theme';

import 'typeface-pacifico'; // logo font

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
