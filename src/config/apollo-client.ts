import WithApollo from 'next-with-apollo';
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { constants } from 'config';

export const NextWithApollo = WithApollo(({ initialState }) => {
	return new ApolloClient({
		uri: constants.api,
		cache: new InMemoryCache().restore(initialState || {}),
	});
});
