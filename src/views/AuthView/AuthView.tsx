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
import { notify } from 'utils';
import { validation } from 'config';
import { useState } from 'react';
export const AuthView = () => {
	const { state, reset, bindings } = useInput('');
	const [validationError, setValidationError] = useState('');

	const authCheck = validation.auth.check({ email: state });

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
						onClick={() => {
							notify({
								type: 'success',
								title: 'Login succeeded',
								message:
									"Check your inbox we've sent you the code",
							});

							if (authCheck.email.hasError) {
								setValidationError(
									authCheck.email.errorMessage
								);
							} else {
								reset();
								setValidationError('');
							}
						}}
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
