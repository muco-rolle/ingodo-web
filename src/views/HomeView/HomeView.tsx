import { Button, Typography } from '@material-ui/core';
import { StyledHomeView } from './HomeView.styles';

export const HomeView = (): any => {
	return (
		<StyledHomeView>
			<h1>Hello Home View</h1>
			<Typography>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
				et laudantium a asperiores voluptas fugiat iste, repellendus
				distinctio saepe animi enim, ab commodi. Quaerat porro velit
				quis aut at repellendus.
			</Typography>
			<Button color="primary" variant="contained">
				Testing
			</Button>
		</StyledHomeView>
	);
};
