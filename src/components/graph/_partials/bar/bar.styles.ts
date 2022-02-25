import styled from 'styled-components';
import { getGradientTextClip } from '../../../../helpers/get-gradient-text-clip.helper';
import { shadow, theme } from '../../../../theme';
import { BarStyledProps } from './bar.definition';

export const Bar = styled.div<BarStyledProps>`
    width: 100%;
    background-color: ${theme.c.pink.b};
    background-image: linear-gradient(135deg, ${theme.c.orange.a}, ${theme.c.purple.b});
    z-index: 25;
    height: ${({ percent }) => percent}%;
    margin: 0.1rem;
    border-radius: 1rem;
`;

export const BarBackground = styled.div<BarStyledProps>`
    display: flex;
    align-items: flex-end;
    background-color: ${theme.c.white.b};
    box-shadow: ${shadow.inset.a};
    height: ${({ percent }) => (percent ? percent : 100)}%;
    width: 2rem;
    border-radius: 1rem;
`;
