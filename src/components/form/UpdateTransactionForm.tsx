import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Form, InputPicker, Button } from 'rsuite';

import {
    useGetTransactionQuery,
    useUpdateTransactionMutation,
} from 'resolvers';
import { validators } from 'config';
import { InputField } from 'components';
import { breakpoints } from 'breakpoints';

interface Props {
    id: any;
    showUpdateForm: any;
}
export const UpdateTransactionForm = ({ id, showUpdateForm }: Props) => {
    let form: { check: () => any } | null = null;

    const [, setFormError] = React.useState({});
    const { data, loading } = useGetTransactionQuery({
        variables: { transactionId: id },
    });

    const [updateTransaction, state] = useUpdateTransactionMutation();

    const [formValue, setFormValue] = React.useState({
        type: '',
        description: '',
        amount: '',
    });

    const handleSubmit = async () => {
        if (!form!.check()) return;
        try {
            const response = await updateTransaction({
                variables: {
                    ...formValue,
                    amount: +formValue.amount,
                    transactionId: id,
                },
            });
            console.log(response);
            showUpdateForm(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const type = !loading ? data?.transaction.type : '';
        const description = !loading ? data?.transaction.description : '';
        const amount = !loading ? data?.transaction.amount : '';
        setFormValue({
            type: type as string,
            description: description as string,
            amount: amount as string,
        });
    }, [loading, data]);
    return (
        <StyledUpdateTransactionForm>
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
                <div className="row">
                    <InputField
                        placeholder="type"
                        size="sm"
                        name="type"
                        style={{ marginBottom: '0' }}
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
                </div>

                <div className="row">
                    <InputField
                        disableLabel={true}
                        size="sm"
                        type="text"
                        label="description"
                        name="description"
                    />
                </div>

                <div className="row">
                    <InputField
                        disableLabel={true}
                        size="sm"
                        type="number"
                        name="amount"
                        label="amount"
                    />
                </div>

                <div className="row">
                    <Button
                        appearance="primary"
                        block
                        size="sm"
                        loading={state.loading}
                        onClick={handleSubmit}
                    >
                        Update
                    </Button>

                    <Button
                        block
                        size="sm"
                        onClick={() => showUpdateForm(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </StyledUpdateTransactionForm>
    );
};

const StyledUpdateTransactionForm = styled.div`
    padding: 10px;
    form {
        display: flex;
        align-items: center;

        .rs-form-group {
            margin-bottom: 0 !important;
        }

        .rs-control-label {
            display: none !important;
        }

        .row:not(:last-child) {
            margin-right: 20px;
        }

        .row:last-child {
            display: flex;
            align-items: center;
            button.rs-btn-primary {
                margin-right: 10px;
            }

            button.rs-btn-default {
                margin-top: 0 !important;
            }
        }
    }

    ${breakpoints.mobileL} {
        padding: 20px 0;
        .rs-form {
            flex-direction: column;
            width: 100%;
            margin: 0 auto;

            .row {
                width: 100%;
            }

            .row:not(:last-child) {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }
    }
`;
