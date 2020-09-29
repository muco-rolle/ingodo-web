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
import styled from 'styled-components/macro';

export const HomeView = (): any => {
	const { state, reset, bindings } = useInput('');

	return (
		<StyledHomeView>
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

				<div className="link-auth">
					<Text p>Or with a secure link</Text>

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
							reset();
						}}
					>
						Send me link
					</Button>
				</div>
			</Card>
		</StyledHomeView>
	);
};

const StyledHomeView = styled.div`
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
