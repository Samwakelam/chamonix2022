import styled, { css } from 'styled-components';
import { LocationTypes } from '../../@types/resort-data.definition';
import { shadow, theme } from '../../theme';

export const Header = styled.header`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    position: relative;

    background-color: ${theme.c.white.a};
    box-shadow: ${shadow.raised.a};
    height: 100vh;
    width: 15rem;

    & select {
        margin: 0 1rem 0 0;
        width: 80%;
        border-radius: 0 2rem 2rem 0;
        align-self: flex-start;
        text-align: center;
        background-image: linear-gradient(135deg, ${theme.c.aqua.a}, ${theme.c.aqua.b});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (orientation: landscape) {
            border-radius: 2rem;
            align-self: center;
            order: 4;
            transform: translateX(2rem);
        }
    }

    @media (orientation: landscape) {
        flex-flow: row;
        align-items: center;

        height: 15rem;
        width: 100vw;
    }
`;

export const TitleWrap = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    background-image: linear-gradient(135deg, ${theme.c.blue.a}, ${theme.c.blue.b});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

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
        padding: 0 2rem;
    }
`;

export const RoundButtonWrap = styled.div`
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

        &[data-active='true'] {
            transform: scale(1.5, 1.5);
            color: ${theme.c.blue.c};
        }
    }

    @media (orientation: landscape) {
        flex-flow: row;
        order: 3;
        width: 30rem;
        padding: 0 2rem;

        & button {
            margin: 0 1.5rem;
        }
    }
`;

export const LeftButtonWrap = styled.div`
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

        background-image: linear-gradient(135deg, ${theme.c.blue.a}, ${theme.c.blue.b});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

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

            background-image: linear-gradient(135deg, ${theme.c.blue.b}, ${theme.c.blue.c});
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    @media (orientation: landscape) {
        order: 1;
        height: 100%;
        justify-content: center;
        height: 15rem;
    }
`;

export const ToggleWrap = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    background-image: linear-gradient(135deg, ${theme.c.blue.a}, ${theme.c.blue.b});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    bottom: 2.4rem;

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

    @media (orientation: landscape) {
        transform: rotate(270deg);
        order: 5;

        & h3 {
            writing-mode: vertical-rl;
            text-orientation: sideways-left;
        }
    }
`;
