import React from 'react';
import { ApolloError } from '@apollo/client';
import styled from 'styled-components';

import { GetTransactionsQuery } from 'resolvers';
import { Balance } from './Balance';
import { TransactionAmount } from './TransactionAmount';
import { breakpoints } from 'breakpoints';

interface TransactionsOverviewProps {
    loading: boolean;
    error?: ApolloError | undefined;
    data: GetTransactionsQuery | undefined;
}

export const TransactionsOverview = (props: TransactionsOverviewProps) => {
    const { loading, data } = props;

    const getTotalExpenses = () => {
        if (!loading) {
            const expenses = data?.transactions.filter(
                (transaction) => transaction.type === 'expense'
            );

            return expenses?.reduce((acc, { amount }) => acc + amount, 0);
        }
    };

    const getTotalIncome = () => {
        if (!loading) {
            const income = data?.transactions.filter(
                (transaction) => transaction.type === 'income'
            );

            return income?.reduce((acc, { amount }) => acc + amount, 0);
        }
    };

    const totalExpenses = getTotalExpenses();
    const totalIncome = getTotalIncome();
    const balance = totalIncome! - totalExpenses!;

    return (
        <StyledTransactionsOverView>
            <Balance balance={balance} />
            <div className="amounts">
                <TransactionAmount
                    type="income"
                    amount={totalIncome as number}
                />
                <TransactionAmount
                    type="expense"
                    amount={totalExpenses as number}
                />
            </div>
        </StyledTransactionsOverView>
    );
};

const StyledTransactionsOverView = styled.div`
    .amounts {
        display: flex;
        justify-content: center;
        width: 400px;
        margin: 40px auto;
    }

    ${breakpoints.mobileL} {
        width: 80%;
        margin: 0 auto;
        .amounts {
            width: 100%;
            flex-direction: column;
            align-items: center;
        }
    }
`;
