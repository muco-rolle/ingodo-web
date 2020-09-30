import styled from 'styled-components/macro';
import dynamic from 'next/dynamic';

import { Text, Card, Button, Spacer, useInput } from '@geist-ui/react';
import { useToasts } from 'react-toast-notifications';
import { DocumentHead } from 'components';

const ReactCodeInput = dynamic(import('react-code-input'));

export const VerifyCodeView = () => {
	const { state, reset, bindings } = useInput('');
	const { addToast } = useToasts();

	return (
		<StyledVerifyCodeView>
			<DocumentHead title="Verify code" />
			<Card width="400px" shadow className="auth-card">
				<div className="intro">
					<Text h3>Verification</Text>
				</div>

				<div className="code-auth">
					<Text p>
						Enter the verification code we just sent you on your
						email address
					</Text>
					<ReactCodeInput
						inputMode="numeric"
						name="code"
						type="text"
						fields={6}
						{...bindings}
					/>
					<Spacer y={1} />
					<Button
						type="success"
						auto
						onClick={() => {
							console.log(state);
							addToast(
								'Check your inbox we sent a secure link to login',
								{
									appearance: 'success',
								}
							);

							reset();
						}}
					>
						Verify Code
					</Button>
				</div>
			</Card>
		</StyledVerifyCodeView>
	);
};

const StyledVerifyCodeView = styled.div`
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
