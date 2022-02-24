import styled, { css } from 'styled-components';

import { shadow, theme } from '../../theme';
import { device } from '../../theme/device.object';

const NavigationBaseStyles = css`
    display: flex;
    align-items: center;

    background-color: ${theme.c.white.a};
    box-shadow: ${shadow.raised.a};
    height: 100vh;
    width: 15rem;
    transition-property: width;
    transition: 200ms;
`;

export const Navigation = styled.nav<{ path: string }>`
    ${NavigationBaseStyles}

    ${({ path }) =>
        path === '/maps' &&
        css`
            width: 7rem;

            & svg {
                height: 100%;
            }
        `}

    @media (orientation: landscape) {
        height: 15rem;
        width: 100vw;

        ${({ path }) =>
            path === '/maps' &&
            css`
                width: 100vw;
                height: 7rem;

                & svg {
                    height: 100%;
                }
            `}
    }

    @media ${device.laptopL} {
        ${NavigationBaseStyles}

        ${({ path }) =>
            path === '/maps' &&
            css`
                width: 7rem;

                & svg {
                    height: 100%;
                }
            `}
    }
`;
