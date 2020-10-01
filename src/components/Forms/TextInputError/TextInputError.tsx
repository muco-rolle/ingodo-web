import styled from 'styled-components';
import { Text } from '@geist-ui/react';
import { ReactNode } from 'react';

export const TextInputError = ({ children }: { children: ReactNode }) => (
	<StyledTextInputError type="error">{children}</StyledTextInputError>
);

const StyledTextInputError = styled(Text)`
	margin: 3px 0 !important;
`;
