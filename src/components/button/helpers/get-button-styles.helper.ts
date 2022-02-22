import { css, FlattenSimpleInterpolation } from 'styled-components';

import { theme, shadow } from '../../../theme';

import { ButtonTypes } from '../button.definition';

const shadowA = `box-shadow: ${shadow.raised.a};`;
const backgroundWhite = `background-color: ${theme.c.white.a};`;

export const getButtonStyles = (buttonType: ButtonTypes): FlattenSimpleInterpolation => {
    switch (buttonType) {
        case ButtonTypes.PRIMARY:
            return css`
                ${backgroundWhite}
                ${shadowA}
                font-weight: 700;
            `;
        case ButtonTypes.SECONDARY:
            return css`
                ${backgroundWhite}
                ${shadowA}
            `;
        case ButtonTypes.LEFT:
            return css`
                ${backgroundWhite}
                ${shadowA}
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            `;
        case ButtonTypes.ICON:
            return css`
                ${backgroundWhite}
                ${shadowA}
                padding: 1rem 1.2rem;
            `;
    }
};
