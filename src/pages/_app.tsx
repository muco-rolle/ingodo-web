import { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

import { NextWithApollo } from 'config';
import { DocumentHead } from 'components';
import { theme } from 'theme';

import 'typeface-pacifico'; // logo font

interface MyAppProps extends AppProps {
	apollo: ApolloClient<unknown>;
}
const MyApp = ({ pageProps, apollo, Component }: MyAppProps): JSX.Element => {
	return (
		<ApolloProvider client={apollo}>
			<ThemeProvider theme={theme}>
				<GeistProvider theme={theme}>
					<CssBaseline />
					<DocumentHead />
					<Component {...pageProps} />
				</GeistProvider>
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default NextWithApollo(MyApp);
