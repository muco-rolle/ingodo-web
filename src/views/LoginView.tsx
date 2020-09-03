import React from 'react';
import { Form, Button } from 'rsuite';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import { AuthLayout } from 'components';
import { InputField, FormFooter } from 'components';
import { validators, routes } from 'config';

import { useLoginMutation } from 'resolvers';
import { storage, notify } from 'utils';

import lockIllustration from 'assets/images/login.svg';
import { useToken } from 'hooks';

export const LoginView = () => {
    let form: { check: () => any } | null = null;
    const [, setFormError] = React.useState({});
    const [login, { loading }] = useLoginMutation();
    const history = useHistory();
    const { validToken } = useToken();

    // redirect to home if already logged in
    if (validToken) history.push(routes.home);

    const [formValue, setFormValue] = React.useState({
        email: '',
        password: '',
    });

    const handleSubmit = async () => {
        if (!form!.check()) return;

        try {
            const response = await login({ variables: { ...formValue } });
            const token = response.data?.login.token;

            storage.save('ingodo-token', token);

            notify({
                type: 'success',
                title: 'Login succeed.',
                message: "You're now logged in enjoy using Ingodo!!!",
            });

            history.push(routes.home);
        } catch ({ message }) {
            notify({
                type: 'danger',
                title: 'Login Failed',
                message,
            });
        }
    };

    return (
        <StyledSignupView>
            <AuthLayout title="Login" illustration={lockIllustration}>
                <Form
                    ref={(ref: { check: () => any } | null) => (form = ref)}
                    onChange={(value: any) => {
                        setFormValue({ ...value });
                    }}
                    onCheck={(formError) => {
                        setFormError({ formError });
                    }}
                    model={validators.login}
                    formValue={formValue}
                    autoComplete="off"
                >
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
                        loading={loading}
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </Form>

                <FormFooter>
                    Want to use &nbsp;<strong> ingodo </strong>?&nbsp;
                    <Link to={routes.signup}>Signup</Link>
                </FormFooter>
            </AuthLayout>
        </StyledSignupView>
    );
};

const StyledSignupView = styled.div``;
