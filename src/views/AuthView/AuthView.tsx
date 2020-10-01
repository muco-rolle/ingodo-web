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
import { DocumentHead } from 'components';
import { notify } from 'utils';
export const AuthView = () => {
	const { state, reset, bindings } = useInput('');

	return (
		<StyledAuthView>
			<DocumentHead title="Auth" />
			<Card width="400px" shadow className="auth-card">
				<div className="intro">
					<Text h4>Welcome on ingodo</Text>
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

				<div className="code-auth">
					<Text p>Or with a secure code</Text>

					<Input
						placeholder="Enter your email"
						size="large"
						width="100%"
						{...bindings}
					/>
					<Spacer y={1} />
					<Button
						type="success"
						auto
						onClick={() => {
							console.log(state);
							notify({
								type: 'success',
								title: 'Login succeeded',
								message:
									"Check your inbox we've sent you the code",
							});
							reset();
						}}
					>
						Send me code
					</Button>
				</div>
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
