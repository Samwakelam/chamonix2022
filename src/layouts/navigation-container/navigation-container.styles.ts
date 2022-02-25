import styled, { css } from 'styled-components';

import { device, shadow, theme } from '../../theme';
import { NavigationContainerStyledProps } from './navigation-container.definition';

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

export const NavigationContainer = styled.nav<NavigationContainerStyledProps>`
    ${NavigationBaseStyles}

    ${({ page }) =>
        page === '/maps' &&
        css`
            width: 7rem;

            & svg {
                height: 100%;
            }
        `}

        ${({ isOpen }) =>
        isOpen &&
        css`
            width: 0;
        `}

    @media (orientation: landscape) {
        height: 15rem;
        width: 100vw;

        ${({ page }) =>
            page === '/maps' &&
            css`
                width: 100vw;
                height: 7rem;

                & svg {
                    height: 100%;
                }
            `}

        ${({ isOpen }) =>
            isOpen &&
            css`
                height: 0;
            `}
    }

    @media ${device.laptopL} {
        ${NavigationBaseStyles}

        ${({ page }) =>
            page === '/maps' &&
            css`
                width: 7rem;

                & svg {
                    height: 100%;
                }
            `}
    }
`;
