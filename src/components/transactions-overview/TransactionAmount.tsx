import React from 'react';
import styled from 'styled-components';
import { BsArrowUpRight, BsArrowDownRight } from 'react-icons/bs';
import { breakpoints } from 'breakpoints';

interface TransactionAmountProps {
    type: string;
    amount: number;
}
export const TransactionAmount = ({ type, amount }: TransactionAmountProps) => {
    return (
        <StyledTransactionAmount type={type}>
            <span className="icon">
                {type === 'income' ? <BsArrowDownRight /> : <BsArrowUpRight />}
            </span>
            <div className="title">
                {type === 'income' ? 'Earned' : 'Spent'}
            </div>

            <div className="amount">{amount} Fbu</div>
        </StyledTransactionAmount>
    );
};

const StyledTransactionAmount = styled.div<{ type: string }>`
    position: relative;
    width: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 3px;
    text-align: center;

    &:first-child {
        margin-right: 50px;
    }

    .icon {
        position: absolute;
        left: 15px;
        svg {
            fill: ${({ type }) => (type === 'income' ? '#34A853' : '#D93E31')};
            font-weight: 900;
        }
    }
    .title,
    .amount {
        font-weight: 700;
    }

    .title {
        color: ${({ type }) => (type === 'income' ? '#34A853' : '#D93E31')};
    }
    .amount {
        font-size: 20px;
    }

    ${breakpoints.mobileL} {
        &:first-child {
            margin: 0 0 30px 0;
        }
    }
`;
