import styled, { css } from 'styled-components';

import { BarTextContentStyledProps } from './bar-text-content.definition';

export const BarTextContent = styled.div<BarTextContentStyledProps>`
    width: 100%;
    height: 20%;
    text-align: center;
    position: relative;

    & p {
        margin: 1rem 0;

        ${({ isVertical }) =>
            isVertical &&
            css`
                transform: rotate(270deg) translateX(-50%);
            `}
    }
`;
