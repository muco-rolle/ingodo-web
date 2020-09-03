import React from 'react';
import { Form, Button } from 'rsuite';
import styled from 'styled-components';

import { InputField, FormFooter, AuthLayout } from 'components';

import { validators, routes } from 'config';
import { Link, useHistory } from 'react-router-dom';
import { useSignupMutation } from 'resolvers';
import { notify, storage } from 'utils';
import { useToken } from 'hooks';

import lockIllustration from 'assets/images/signup.svg';

export const SignupView = () => {
    const [, setFormError] = React.useState({});
    const [signup, { loading }] = useSignupMutation();
    const history = useHistory();
    const { validToken } = useToken();

    // redirect to home if already signed up
    if (validToken) history.push(routes.home);

    const [formValue, setFormValue] = React.useState({
        username: '',
        email: '',
        password: '',
    });

    let form: { check: () => any } | null = null;

    const handleSubmit = async () => {
        if (!form!.check()) return;

        try {
            const response = await signup({ variables: { ...formValue } });
            const token = response.data?.signup.token;

            storage.save('ingodo-token', token);

            notify({
                type: 'success',
                title: 'Signup succeed.',
                message: "You're now signed up enjoy using Ingodo!!!",
            });

            history.push(routes.home);
        } catch ({ message }) {
            notify({
                type: 'danger',
                title: 'Signup Failed',
                message,
            });
        }
    };

    return (
        <StyledSignupView>
            <AuthLayout title="Signup" illustration={lockIllustration}>
                <Form
                    ref={(ref: { check: () => any } | null) => (form = ref)}
                    onChange={(value: any) => {
                        setFormValue({ ...value });
                    }}
                    onCheck={(formError) => {
                        setFormError({ formError });
                    }}
                    model={validators.signup}
                    formValue={formValue}
                    autoComplete="off"
                >
                    <InputField type="text" name="username" label="Username" />
                    <InputField type="email" name="email" label="Email" />
                    <InputField
                        type="password"
                        name="password"
                        label="Password"
                    />

                    <Button
                        appearance="primary"
                        block
                        size="lg"
                        onClick={handleSubmit}
                        loading={loading}
                    >
                        Signup
                    </Button>
                </Form>

                <FormFooter>
                    Already using &nbsp;<strong> ingodo </strong>?&nbsp;
                    <Link to={routes.login}>Login</Link>
                </FormFooter>
            </AuthLayout>
        </StyledSignupView>
    );
};

const StyledSignupView = styled.div``;
