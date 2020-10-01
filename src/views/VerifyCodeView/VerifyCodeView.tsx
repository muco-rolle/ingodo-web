import styled from 'styled-components/macro';
import dynamic from 'next/dynamic';

import { Text, Card, Button, Spacer, useInput } from '@geist-ui/react';
import { DocumentHead } from 'components';

const ReactCodeInput = dynamic(import('react-code-input'));

export const VerifyCodeView = () => {
	const { state, reset, bindings } = useInput('');

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
						className="custom-code-input"
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

	.code-card {
		margin: 20px;
	}

	.custom-code-input {
		display: flex !important;
		justify-content: space-between;
		width: 100%;
		input {
			display: inline-block;
			border-radius: 4px;
			border: 1px solid lightgrey;
			box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
			padding-left: 8px;
			margin: 5px;
			width: 42px;
			height: 42px;
			font-size: 32px;
			box-sizing: border-box;
			color: black;
			background-color: white;
		}
	}
`;
