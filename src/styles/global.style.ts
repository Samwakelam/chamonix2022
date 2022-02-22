import { createGlobalStyle } from 'styled-components';

import { theme } from '../theme';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html, body {
        font-size: 62.5%;
        margin: 0;
        background-color: ${theme.c.white.b}
        
    }

    h1,
    button {
        font-family: Lato, sans-serif;
    }

    [class^="icon-"]::before,
    [class*=" icon-"]::before {
        font-family: FontAwesome;
        font-weight: normal;
        font-style: normal;
        display: inline-block;
        text-decoration: inherit;
    }
`;
