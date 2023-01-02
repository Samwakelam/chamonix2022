import styled, { css } from 'styled-components';

import { getButtonStyles } from './helpers/get-button-styles.helper';
import { ButtonStyledProps } from './button.definition';

import { theme } from '../../theme';

export const Button = styled.button<ButtonStyledProps>`
    font-family: ${theme.f.lato};
    font-size: 1.6rem;
    cursor: pointer;
    padding: 1rem 3rem;
    border-radius: 1rem;
    height: 4rem;
    outline: unset;
    border: unset;

    ${({ buttonType, round }) => css`
        ${round &&
        css`
            border-radius: 2rem;
            min-width: 4rem;
        `}

        ${getButtonStyles(buttonType)}
    `};
`;
