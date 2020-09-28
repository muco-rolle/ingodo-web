import { createMuiTheme, Theme } from '@material-ui/core';
import { palette } from './palette';
import { typography } from './typography';

export const theme: Theme = createMuiTheme({
	palette,
	typography,
});
