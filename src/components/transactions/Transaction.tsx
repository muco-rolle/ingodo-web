import React, { useState } from 'react';
import styled from 'styled-components';
import { BsArrowDownRight, BsArrowUpLeft } from 'react-icons/bs';
import { ButtonToolbar, IconButton, Icon, Modal, Button } from 'rsuite';
import {
    useDeleteTransactionMutation,
    GetTransactionsDocument,
} from 'resolvers';

import { Text } from 'components';
import { formatNumber } from 'utils';
import { UpdateTransactionForm } from 'components/form';
import { breakpoints } from 'breakpoints';

interface TransactionProps {
    id: string;
    type: string;
    description: string;
    amount: number;
    createdAt: Date;
}

export const Transaction = (props: TransactionProps) => {
    const { id, type, description, amount } = props;
    const [deleteTransaction] = useDeleteTransactionMutation();
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const [show, setShow] = useState(false);

    const handleDeleteTransaction = async (id: string) => {
        try {
            const response = await deleteTransaction({
                variables: { transactionId: id },
                update(store, { data }) {
                    const cache: any = store.readQuery({
                        query: GetTransactionsDocument,
                    });
                    const newTransactions = cache.transactions.filter(
                        (transaction: any) =>
                            transaction.id !== data?.deleteTransaction.id
                    );

                    store.writeQuery({
                        query: GetTransactionsDocument,
                        data: { transactions: [...newTransactions] },
                    });
                },
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const TransactionComponent = () => (
        <StyledTransaction type={type}>
            <div className="icon">
                {type === 'income' ? <BsArrowDownRight /> : <BsArrowUpLeft />}
            </div>

            <div className="description">
                <Text level={2} className="text">
                    {description}
                </Text>
                <Text level={1} className="time">
                    {/* {moment().format(createdAt.toTimeString())} */}
                </Text>
            </div>
            <div className="amount">{formatNumber(amount)}</div>
            <ButtonToolbar className="button-toolbar">
                <IconButton
                    onClick={() => setShow(!show)}
                    size="sm"
                    color="red"
                    icon={<Icon icon="trash-o" />}
                    className="deleteButton"
                />

                <IconButton
                    onClick={() => setShowUpdateForm(!showUpdateForm)}
                    size="sm"
                    color="blue"
                    icon={<Icon icon="edit2" />}
                    className="updateButton"
                />

                <Modal
                    backdrop="static"
                    show={show}
                    onHide={() => setShow(!show)}
                    size="xs"
                >
                    <Modal.Header>
                        <Modal.Title>Confirm to submit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this transaction?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={() => {
                                setShow(!show);
                                handleDeleteTransaction(id);
                            }}
                            appearance="primary"
                        >
                            Yep
                        </Button>
                        <Button
                            onClick={() => setShow(!show)}
                            appearance="subtle"
                        >
                            Nope
                        </Button>
                    </Modal.Footer>
                </Modal>
            </ButtonToolbar>
        </StyledTransaction>
    );

    return showUpdateForm ? (
        <UpdateTransactionForm id={id} showUpdateForm={setShowUpdateForm} />
    ) : (
        <TransactionComponent />
    );
};

const StyledTransaction = styled.div<{ type: string }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    &:not(:last-child) {
        border-bottom: 2px solid #f5f4fd;
    }

    .icon {
        width: 40px;
        svg {
            font-size: 20px;
            fill: ${({ type }) => (type === 'income' ? '#34A853' : '#D93E31')};
        }
    }
    .description {
        text-align: left;
        margin: 0 40px;
        word-wrap: break-word;
        width: 300px;

        .text {
            font-weight: 700;
            margin-bottom: -8px;
        }
        .time {
        }
    }

    .amount {
        width: 200px;
        font-size: 18px;
        font-weight: 700;
        text-align: right;
        word-wrap: break-word;
    }

    .button-toolbar {
        display: flex;
        justify-content: flex-end;
        width: 100px;
    }

    ${breakpoints.media('600px')} {
        flex-direction: column;
        justify-content: center;

        .description {
            text-align: center;
            font-size: 18px;
        }

        .amount {
            text-align: center;
            font-size: 22px;
            margin: 5px 0;
        }

        .button-toolbar {
            justify-content: center;

            .deleteButton {
                margin-right: 10px;
            }
        }
    }
`;
