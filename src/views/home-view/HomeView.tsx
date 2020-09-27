import { Button } from '@material-ui/core';
import { StyledHomeView } from './home-view.styles';

export const HomeView = (): any => {
	return (
		<StyledHomeView>
			<h1>Hello Home View</h1>
			<Button color="primary" variant="contained">
				Testing
			</Button>
		</StyledHomeView>
	);
};
