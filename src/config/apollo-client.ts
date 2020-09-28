import WithApollo from 'next-with-apollo';
import { InMemoryCache, ApolloClient } from '@apollo/client';

export const NextWithApollo = WithApollo(({ initialState }) => {
	return new ApolloClient({
		uri: '',
		cache: new InMemoryCache().restore(initialState || {}),
	});
});
