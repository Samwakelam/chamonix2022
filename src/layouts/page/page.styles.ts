import styled, { css } from 'styled-components';

import { shadow, theme, device } from '../../theme';

export const Page = styled.div`
    position: relative;
    display: flex;

    & nav {
        position: sticky;
        left: 0;
    }

    @media (orientation: landscape) {
        flex-flow: column;

        & nav {
            position: sticky;
            top: 0;
        }
    }

    @media ${device.laptopL} {
        flex-flow: row;
    }
`;

export const Main = styled.main`
    display: flex;
    height: 100vh;
    flex: 1;
    overflow-x: hidden;
`;

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
