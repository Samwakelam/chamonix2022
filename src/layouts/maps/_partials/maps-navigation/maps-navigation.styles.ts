import styled, { css } from 'styled-components';

import { getGradientTextClip } from '../../../../helpers/get-gradient-text-clip.helper';
import { theme } from '../../../../theme';
import { device } from '../../../../theme/device.object';

import { MapsNavigationStyledProps } from './maps-navigation.definition';

const MapsNavigationBaseStyles = css`
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

        ${getGradientTextClip(135, theme.c.blue.a, theme.c.blue.b)}
    }

    & button.map-index {
        ${getGradientTextClip(135, theme.c.aqua.a, theme.c.blue.b)}

        & h4 {
            margin: 0 0.4rem;
        }

        &[data-active='true'] {
            transform: scale(1.2, 1.2);

            ${getGradientTextClip(135, theme.c.orange.a, theme.c.pink.c)}
        }
    }
`;

export const MapsNavigation = styled.section<MapsNavigationStyledProps>`
    ${MapsNavigationBaseStyles}

    @media (orientation: landscape) {
        flex-flow: row;

        & h1 {
            writing-mode: vertical-rl;
            transform: rotate(270deg) translateX(-40%);
            width: 15rem;
            height: 15rem;
        }
    }

    @media ${device.laptopL} {
        ${MapsNavigationBaseStyles}

        & h1 {
            width: unset;
        }
    }
`;
