import styled, { css } from 'styled-components';
import { Button as ButtonComponent } from '../../components/button/button.component';

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

export const Button = styled(ButtonComponent)<{ onCollapse: boolean; path: string }>`
    margin-top: 1rem;
    padding: 1rem 2rem;
    position: absolute;
    background-color: ${theme.c.white.a};

    & svg {
        height: 100%;
        transform: rotate(0deg);
        transition: transform 200ms;

        path {
            fill: ${theme.c.aqua.a};
        }
    }

    ${({ onCollapse }) =>
        onCollapse &&
        css`
            & svg {
                transform: rotate(180deg);
                transition: transform 200ms;
            }
        `}

    @media (orientation: landscape) {
        transform: rotate(90deg);
        transition: transform 200ms;
        position: fixed;
        left: 1rem;
        top: ${({ path }) => (path === '/' ? '14.6rem' : '6.6rem')};

        ${({ onCollapse, path }) => {
            if (onCollapse && path === '/maps') {
                return css`
                    transform: rotate(90deg) translatex(-7rem);
                    transition: transform 200ms;
                `;
            }

            if (onCollapse && path === '/') {
                return css`
                    transform: rotate(90deg) translatex(-15rem);
                    transition: transform 200ms;
                `;
            }
        }}
    }
`;
