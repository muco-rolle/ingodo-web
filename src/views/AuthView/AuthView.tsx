import styled from 'styled-components/macro';
import {
	Text,
	Card,
	Input,
	Button,
	Grid,
	Spacer,
	useInput,
} from '@geist-ui/react';
import { Facebook } from '@geist-ui/react-icons';
import { AiOutlineGoogle } from 'react-icons/ai';

import { DocumentHead, TextInputError } from 'components';
import { notify, redirectTo } from 'utils';
import { validation, routes } from 'config';
import { useState } from 'react';
import { useAuthMutation } from 'graphql-resolvers';
export const AuthView = () => {
	const { state, reset, bindings } = useInput('');
	const [validationError, setValidationError] = useState('');
	const [authenticateUser, { loading }] = useAuthMutation();

	const authCheck = validation.auth.check({ email: state });

	const handleAuthentication = async () => {
		try {
			if (!authCheck.email.hasError) {
				const response = await authenticateUser({
					variables: { email: state },
				});

				const { message } = response.data.auth;

				if (message === 'SEND_CODE.SUCCEEDED') {
					notify({
						type: 'success',
						title: 'Login success',
						message: `You've logged in successfull, check your inbox we've sent a verification code on ${state}`,
					});

					redirectTo(routes.verifyCode);
				}

				reset();
				setValidationError('');
			} else {
				setValidationError(authCheck.email.errorMessage);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<StyledAuthView>
			<DocumentHead title="Auth" />
			<Card width="400px" shadow className="auth-card">
				<div className="intro">
					<Text h3>Welcome on ingodo</Text>
				</div>

				<div className="social-auth">
					<Text p>Login with: </Text>
					<Grid.Container gap={2} justify="center">
						<Grid>
							<Button icon={<Facebook color="#4267B2" />} auto>
								Facebook
							</Button>
						</Grid>
						<Grid>
							<Button
								icon={<AiOutlineGoogle color="#DB4437" />}
								auto
							>
								Google
							</Button>
						</Grid>
					</Grid.Container>
				</div>

				<form className="form">
					<Text p>Or with a secure code</Text>

					<Input
						placeholder="Enter your email"
						size="large"
						width="100%"
						{...bindings}
					/>
					<TextInputError>{validationError}</TextInputError>

					<Spacer y={1} />
					<Button
						type="success"
						auto
						loading={loading}
						onClick={handleAuthentication}
					>
						Send me code
					</Button>
				</form>
			</Card>
		</StyledAuthView>
	);
};

const StyledAuthView = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: url('images/bg.png') no-repeat;
	background-size: cover;
	height: 100vh;

	.auth-card {
		margin: 20px;
	}
`;
