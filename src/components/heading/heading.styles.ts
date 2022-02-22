import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { HeadingStyledProps } from './heading.definition';

const sizeStyles = ({ fontSize, lineHeight }: { fontSize: number; lineHeight: number }) => css`
    font-size: ${fontSize}rem;
    line-height: ${lineHeight}rem;
`;

export const Heading = styled.h1<HeadingStyledProps>`
    font-family: ${theme.f.lato};
    font-weight: 700;
    text-transform: uppercase;

    /* ${({ configuration }) =>
        sizeStyles({ fontSize: configuration.fontSize.mobile, lineHeight: configuration.lineHeight.mobile })}

    @media ${device.tablet} {
        ${({ configuration }) =>
        sizeStyles({ fontSize: configuration.fontSize.tablet, lineHeight: configuration.lineHeight.tablet })}
    }

    @media ${device.desktopS} {
        ${({ configuration }) =>
        sizeStyles({ fontSize: configuration.fontSize.desktop, lineHeight: configuration.lineHeight.desktop })}
    } */
`;
