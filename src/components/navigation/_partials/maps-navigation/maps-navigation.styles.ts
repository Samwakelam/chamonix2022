import styled, { css } from 'styled-components';
import { theme } from '../../../../theme';
import { MapsNavigationStyledProps } from './maps-navigation.definition';

export const MapsNavigation = styled.section<MapsNavigationStyledProps>`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;

    & svg {
        path {
            fill: ${theme.c.aqua.a};
        }
    }

    & h1 {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        font-size: 1.2rem;
        height: 15rem;
        text-align: center;

        background-image: linear-gradient(135deg, ${theme.c.blue.a}, ${theme.c.blue.b});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & button.map-index {
        background-image: linear-gradient(135deg, ${theme.c.aqua.a}, ${theme.c.blue.b});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        & h4 {
            margin: 0 0.4rem;
        }

        &[data-active='true'] {
            transform: scale(1.2, 1.2);

            background-image: linear-gradient(135deg, ${theme.c.orange.a}, ${theme.c.pink.c});
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    @media (orientation: landscape) {
        flex-flow: row;

        & h1 {
            writing-mode: vertical-rl;
            transform: rotate(270deg) translateX(-40%);
            width: 15rem;
            height: 15rem;
        }
    }
`;
