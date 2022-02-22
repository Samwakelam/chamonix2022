import styled, { css } from 'styled-components';
import { theme, shadow } from '../../theme';

export const ToggleContainer = styled.div`
    width: 70px;
    height: 40px;
`;

export const Toggle = styled.label`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
`;

export const Span = styled.span<{ width: number; height: number }>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.c.white.b};
    box-shadow: ${shadow.inset.a};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: ${({ height }) => `${height / 2}px`};

    &:before {
        position: absolute;
        content: '';
        background-color: ${theme.c.white.a};
        box-shadow: ${shadow.raised.a};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;

        ${({ width, height }) => css`
            width: ${height - width / 5}px;
            left: ${width / 10}px;
            bottom: ${width / 10}px;
            top: ${width / 10}px;
        `}
    }

    &[data-active='true'] {
        background-color: ${theme.c.white.b};
    }

    &[data-active='true']:before {
        ${({ width, height }) => css`
            -webkit-transform: translateX(${width - width / 5}px);
            -ms-transform: translateX(${width - width / 5}px);
            transform: translateX(${width - width / 5 - (height - width / 5)}px);
        `}
    }
`;
