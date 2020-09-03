import React from 'react';
import styled from '@emotion/styled';
import { Text, Heading } from 'components';
import { formatNumber } from 'utils';

interface BalanceProps {
    balance: number;
}
export const Balance = ({ balance }: BalanceProps) => {
    return (
        <StyledTotalBalance>
            <Text level={2}>
                Balance in <strong>Aug:</strong>
            </Text>
            <Heading level={2}>{formatNumber(balance)}</Heading>
        </StyledTotalBalance>
    );
};

const StyledTotalBalance = styled.div`
    text-align: center;
    margin-top: 40px;
`;
