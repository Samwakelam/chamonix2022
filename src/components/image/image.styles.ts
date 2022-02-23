import styled, { css } from 'styled-components';
import { ImageStyledProps } from './image.definition';

export const Image = styled.picture<ImageStyledProps>`
    overflow: scroll;
    height: 100%;
    width: 100%;

    & img {
        ${({ fit = 'unset' }) => css`
            height: inherit;
            object-fit: ${fit};
        `}
    }

    @media (orientation: landscape) {
        & img {
            width: inherit;
        }
    }
`;
