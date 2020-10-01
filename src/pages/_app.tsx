import { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import ReactNotification from 'react-notifications-component';

import { NextWithApollo } from 'config';
import { DocumentHead, GlobalStyles } from 'components';
import { theme } from 'theme';

import 'typeface-pacifico'; // logo font
import 'typeface-nunito'; // body text font
import 'react-notifications-component/dist/theme.css'; // toast notifications styles
import 'animate.css/animate.compat.css';

interface MyAppProps extends AppProps {
	apollo: ApolloClient<unknown>;
}
const MyApp = ({ pageProps, apollo, Component }: MyAppProps): JSX.Element => {
	return (
		<ApolloProvider client={apollo}>
			<ThemeProvider theme={theme}>
				<GeistProvider theme={theme}>
					<DocumentHead />
					<CssBaseline />
					<GlobalStyles />
					<ReactNotification />
					<Component {...pageProps} />
				</GeistProvider>
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default NextWithApollo(MyApp);
