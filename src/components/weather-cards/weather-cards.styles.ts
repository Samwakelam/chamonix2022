import styled, { css } from 'styled-components';

import { getGradientTextClip } from '../../helpers/get-gradient-text-clip.helper';
import { shadow, theme } from '../../theme';

export const DataCard = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    box-shadow: ${shadow.raised.a};
    background-color: ${theme.c.white.a};
    border-radius: 1rem;
`;

export const ButtonWrap = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 2fr 1fr;
    flex-flow: column;
    align-self: flex-start;
    justify-content: center;
    height: fit-content;

    & button {
        padding: 1rem 0;
        margin: 0 1rem 1rem 1rem;
        width: 4rem;

        ${getGradientTextClip(135, theme.c.orange.a, theme.c.pink.b)}

        svg path {
            fill: ${theme.c.pink.b};
        }
    }

    & > button.left {
        margin: 0 0 1rem 0;
        padding: 1rem 0;
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 2fr;

        & span {
            font-size: 1.2rem;
            font-weight: 400;
        }

        & i,
        svg {
            margin: 0 1rem;
            height: 100%;
        }

        &[data-display='false'] {
            display: flex;
            justify-content: center;
            & span {
                display: none;
            }
        }
    }
`;
