import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        font-family: ${({ theme }) => theme.typography.fontFamily}  !important;
    }

    body {
        background-color: white;
    }
`;
