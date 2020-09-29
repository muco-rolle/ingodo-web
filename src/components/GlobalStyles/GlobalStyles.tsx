import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        font-family: inherit !important;
    }

    html {
        font-family: 'Nunito', sans-serif !important;

    }

   ::selection {
        color: white !important;
    }
`;
