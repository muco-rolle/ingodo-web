import React from 'react';
import styled from '@emotion/styled';
import {
    DocumentHead,
    Header,
    Transactions,
    TransactionsOverview,
    AddTransactionForm,
} from 'components';
import { useGetTransactionsQuery } from 'resolvers';

export const AppView = () => {
    const { data, loading } = useGetTransactionsQuery();

    return (
        <StyledAppView>
            <DocumentHead title="App" />
            <Header />
            <TransactionsOverview data={data} loading={loading} />
            <AddTransactionForm />
            <Transactions data={data} loading={loading} />
        </StyledAppView>
    );
};

const StyledAppView = styled.div`
    header {
        z-index: 100;
    }
`;
