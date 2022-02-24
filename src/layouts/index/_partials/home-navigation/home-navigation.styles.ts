import styled, { css } from 'styled-components';

import { getGradientTextClip } from '../../../../helpers/get-gradient-text-clip.helper';
import { theme } from '../../../../theme';
import { device } from '../../../../theme/device.object';

import { HomeNavigationStyledProps } from './home-navigation.definition';

const HomeNavigationBaseStyles = css`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const SelectBaseStyles = css`
    margin: 0 1rem 0 0;
    width: 80%;
    border-radius: 0 2rem 2rem 0;
    align-self: flex-start;
    text-align: center;

    ${getGradientTextClip(135, theme.c.aqua.a, theme.c.aqua.b)}
`;

export const HomeNavigation = styled.section<HomeNavigationStyledProps>`
    ${HomeNavigationBaseStyles}

    & select {
        ${SelectBaseStyles}

        @media (orientation: landscape) {
            border-radius: 2rem;
            align-self: center;
            order: 4;
            transform: translateX(2rem);
        }

        @media ${device.laptopL} {
            ${SelectBaseStyles}

            order: unset;
            transform: unset;
        }
    }

    @media (orientation: landscape) {
        flex-flow: row;
    }

    @media ${device.laptopL} {
        ${HomeNavigationBaseStyles}
        order: unset;
    }
`;

export const TitleWrap = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    ${getGradientTextClip(135, theme.c.blue.a, theme.c.blue.b)}

    & h1 {
        font-size: 1.2rem;
        margin: 0;
    }

    & h2 {
        font-size: 1rem;
        margin: 0;
    }

    @media (orientation: landscape) {
        order: 2;
        height: 15rem;
        width: 15rem;
        justify-content: center;
        padding: 0 1rem;
    }

    @media ${device.laptopL} {
        height: unset;
        width: unset;
        order: unset;
        padding: unset;
    }
`;

const RoundButtonWrapBaseStyles = css`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;

    & button {
        margin: 0 0 3rem 0;
        color: ${theme.c.blue.a};

        & * {
            pointer-events: none;
        }

        & svg {
            height: 100%;
        }

        &:last-of-type {
            margin: 0 0 1rem 0;
        }

        &[data-active='true'] {
            transform: scale(1.5, 1.5);
            color: ${theme.c.blue.c};
        }
    }
`;

export const RoundButtonWrap = styled.div`
    ${RoundButtonWrapBaseStyles}

    @media (orientation: landscape) {
        flex-flow: row;
        order: 3;
        width: 30rem;
        padding: 0 1rem;

        & button {
            margin: 0 1.5rem;

            &:last-of-type {
                margin: 0 0 0 0;
            }
        }
    }

    @media ${device.laptopL} {
        ${RoundButtonWrapBaseStyles}
        order: unset
    }
`;

const LeftButtonWrapBaseStyles = css`
    display: flex;
    flex-flow: column;
    align-self: flex-start;
    bottom: 0;
    width: 100%;
    visibility: visible;

    & h3 {
        font-size: 1.2rem;
        margin: 0;
    }

    & > button {
        align-self: flex-start;
        height: unset;

        margin: 0 0 1rem 0;
        width: 50%;
        padding: 1rem 0;
        text-align: center;

        ${getGradientTextClip(135, theme.c.blue.a, theme.c.blue.b)}

        & > * {
            pointer-events: none;
        }

        & h3 {
            line-height: unset;
        }

        & svg {
            height: 100%;
            width: 100%;
        }

        &[data-active='true'] {
            width: 80%;
            color: ${theme.c.blue.c};

            ${getGradientTextClip(135, theme.c.blue.b, theme.c.blue.c)}
        }
    }
`;

export const LeftButtonWrap = styled.div`
    ${LeftButtonWrapBaseStyles}

    @media (orientation: landscape) {
        order: 1;
        justify-content: center;
        height: 15rem;
        width: 150rem;
    }

    @media ${device.laptopL} {
        ${LeftButtonWrapBaseStyles}
        height: unset;
        order: unset;
    }
`;

const ToggleWrapBaseStyles = css`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    ${getGradientTextClip(135, theme.c.blue.a, theme.c.blue.b)}

    & h3 {
        font-size: 1.2rem;

        &:first-of-type {
            margin-right: 1rem;
        }

        &:last-of-type {
            margin-left: 1rem;
        }
    }

    & > div {
        height: 30px;
        width: 55px;
    }
`;

export const ToggleWrap = styled.div`
    ${ToggleWrapBaseStyles}

    @media (orientation: landscape) {
        transform: rotate(270deg);
        order: 5;

        & h3 {
            writing-mode: vertical-rl;
            text-orientation: sideways-left;
        }
    }

    @media ${device.laptopL} {
        transform: unset;
        order: unset;

        & h3 {
            writing-mode: unset;
            text-orientation: unset;
        }
    }
`;
