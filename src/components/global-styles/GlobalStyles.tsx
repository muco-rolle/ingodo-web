import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    /* global styles */
    a {
        font-weight: 900;
    }

    /* custom styles */
    /*========= FORM ============*/
    .rs-form-control-wrapper {
        width: 100%;
    }

    .rs-input, .rs-picker-input {
        width: 100% !important;
        border-radius: 3px;
    }

    /*========= Button ============*/
    button.rs-btn {
       
        border-radius: 3px;
        &:active {
        box-shadow: none;

        }
    }

    .rs-dropdown .rs-dropdown-menu {
        box-shadow: 0 1px 14px  rgba(0, 0, 0, 0.1);
    }

`;
