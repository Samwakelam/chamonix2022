import styled, { css } from 'styled-components';
import { IconStyledProps } from './icon.definition';

export const Icon = styled.i<IconStyledProps>`
    ${({ size }) =>
        size &&
        css`
            font-size: ${size}rem;
        `}
`;
