import styled from 'styled-components/macro';
import { Text, Card, Input, Button, Spacer, useInput } from '@geist-ui/react';
import { DocumentHead } from 'components';

export const ResendCodeView = () => {
	const { state, reset, bindings } = useInput('');

	return (
		<StyledResendCodeView>
			<DocumentHead title="Resend Code" />
			<Card width="400px" shadow className="auth-card">
				<div className="intro">
					<Text h3>Send Code</Text>
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

							reset();
						}}
					>
						Resend me code
					</Button>
				</div>
			</Card>
		</StyledResendCodeView>
	);
};

const StyledResendCodeView = styled.div`
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
