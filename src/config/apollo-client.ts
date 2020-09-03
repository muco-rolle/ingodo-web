import { ApolloClient, InMemoryCache } from '@apollo/client';
import { constants } from 'config';
import { storage } from 'utils';

export const getApolloClient = () => {
    const { api } = constants;
    const token = storage.get('ingodo-token');

    return new ApolloClient({
        uri: api,
        headers: { authorization: `${token}` },
        cache: new InMemoryCache(),
    });
};
