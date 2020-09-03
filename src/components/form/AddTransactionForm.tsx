import React from 'react';
import { Form, Button, InputPicker } from 'rsuite';

import { InputField } from 'components';
import { validators } from 'config';
import styled from 'styled-components';
import {
    useCreateTransactionMutation,
    GetTransactionsDocument,
} from 'resolvers';
import { notify } from 'utils';
import { breakpoints } from 'breakpoints';

export const AddTransactionForm = () => {
    let form: { check: () => any } | null = null;

    const [createTransaction, { loading }] = useCreateTransactionMutation();

    const [, setFormError] = React.useState({});

    const [formValue, setFormValue] = React.useState({
        type: '',
        description: '',
        amount: '',
    });

    const handleSubmit = async () => {
        if (!form!.check()) return;

        const { type, description, amount } = formValue;
        try {
            const response = await createTransaction({
                variables: { ...formValue, amount: +formValue.amount },
                update(store, { data }) {
                    const cache: any = store.readQuery({
                        query: GetTransactionsDocument,
                    });

                    const newTransactions = [
                        ...cache.transactions,
                        data?.createTransaction,
                    ];

                    store.writeQuery({
                        query: GetTransactionsDocument,
                        data: { transactions: [...newTransactions] },
                    });
                },
            });

            const notifyType = (type: string): 'success' | 'warning' =>
                type === 'expense' ? 'warning' : 'success';

            if (response) {
                notify({
                    type: notifyType(type),
                    title: 'Transaction created',
                    message: `
                        ${
                            type === 'expense'
                                ? 'You spent ' + amount + ' on ' + description
                                : 'You earned ' + amount + ' on ' + description
                        }`,
                });

                setFormValue({ type: '', description: '', amount: '' });
            }
        } catch (error) {
            notify({
                type: 'danger',
                title: 'Transaction creation failed',
                message: error.message,
            });
        }
    };

    return (
        <StyledAddTransactionForm>
            <Form
                ref={(ref: { check: () => any } | null) => (form = ref)}
                onChange={(value: any) => {
                    setFormValue({ ...value });
                }}
                onCheck={(formError) => {
                    setFormError({ formError });
                }}
                model={validators.addTransaction}
                formValue={formValue}
                autoComplete="off"
            >
                <div className="row1">
                    <InputField
                        placeholder="type"
                        name="type"
                        accepter={InputPicker}
                        data={[
                            {
                                label: 'Income',
                                value: 'income',
                            },

                            {
                                label: 'Expense',
                                value: 'expense',
                            },
                        ]}
                    />

                    <InputField
                        disableLabel={true}
                        type="number"
                        name="amount"
                        label="amount"
                    />
                </div>

                <InputField
                    disableLabel={true}
                    type="text"
                    label="description"
                    name="description"
                />

                <Button
                    appearance="primary"
                    block
                    size="lg"
                    onClick={handleSubmit}
                    loading={loading}
                >
                    Add
                </Button>
            </Form>
        </StyledAddTransactionForm>
    );
};

const StyledAddTransactionForm = styled.div`
    form {
        width: 400px;
        margin: 0 auto;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
        padding: 20px;

        .row1 {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            .rs-picker-input {
            }
            .rs-form-group:first-child {
                margin-bottom: 0 !important;
                margin-right: 20px;
            }

            .rs-control-label {
                display: none;
            }
        }
    }

    ${breakpoints.mobileL} {
        width: 80%;
        margin: 0 auto;
        .rs-form:not(.rs-form-inline) .rs-form-group:not(:last-child) {
            margin-bottom: 24px !important;
        }

        .rs-form {
            width: 100%;
        }
        .rs-form .row1 {
            flex-direction: column;
            margin-bottom: 24px;

            .rs-picker-input {
                width: 100%;
            }

            .rs-form-group {
                width: 100%;

                &:first-child {
                    margin-right: 0;
                }
            }
        }
        .rs-form .rs-form-group {
            margin-bottom: 0;

            .rs-form-group {
                width: 100%;
            }
        }
    }
`;
