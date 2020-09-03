import React from 'react';
import styled from 'styled-components';
import { Loader } from 'rsuite';
import { ApolloError } from '@apollo/client';

import { GetTransactionsQuery } from 'resolvers';
import { Heading } from 'components';
import { Transaction } from './Transaction';
import { Empty } from './Empty';
import { breakpoints } from 'breakpoints';

interface TransactionsProps {
    loading: boolean;
    error?: ApolloError | undefined;
    data: GetTransactionsQuery | undefined;
}
export const Transactions = ({ data, loading }: TransactionsProps) => {
    return (
        <StyledTransactions>
            <Heading level={4}>Transactions</Heading>

            <div className="transactions">
                {data?.transactions.length === 0 ? <Empty /> : null}
                {loading ? (
                    <Loader
                        content="Loading..."
                        size="sm"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '40px',
                        }}
                    />
                ) : (
                    data?.transactions.map(
                        ({ id, type, description, amount, createdAt }) => (
                            <Transaction
                                id={id}
                                key={id}
                                type={type}
                                description={description}
                                amount={amount}
                                createdAt={new Date(createdAt)}
                            />
                        )
                    )
                )}
            </div>
        </StyledTransactions>
    );
};

const StyledTransactions = styled.section`
    width: 600px;
    margin: 40px auto;

    h4 {
        text-align: center;
    }

    ${breakpoints.media('600px')} {
        margin: 40px auto;
        width: 80%;

        h4 {
            margin-bottom: 50px;
        }
    }
`;
