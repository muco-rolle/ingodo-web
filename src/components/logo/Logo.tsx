import React, { ReactChild } from 'react';
import styled from 'styled-components';

interface LogoProps {
    children: ReactChild;
    size?: string;
}

interface StyledLogoProps {
    size?: string;
}

export const Logo = ({ children, size }: LogoProps) => {
    return <StyledLogo size={size}>{children}</StyledLogo>;
};

const StyledLogo = styled.span<StyledLogoProps>`
    font-family: Pacifico, cursive;
    font-weight: 900;
    font-size: ${({ size }) => (size ? size : '16px')};
`;
