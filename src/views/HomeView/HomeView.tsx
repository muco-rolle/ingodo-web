import { Text, Card } from '@geist-ui/react';
import styled from 'styled-components/macro';

export const HomeView = (): any => {
	return (
		<StyledHomeView>
			<Text h1>Home View 1</Text>
		</StyledHomeView>
	);
};

const StyledHomeView = styled.div`
	background-color: #f7f7f7;
	height: 100vh;
`;
