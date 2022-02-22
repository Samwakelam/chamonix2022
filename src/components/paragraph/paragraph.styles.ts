import styled from 'styled-components';

import { theme } from '../../theme/theme.object';

import { ParagraphStyledProps } from './paragraph.definition';

export const Paragraph = styled.p<ParagraphStyledProps>`
    margin: 0;
    font-family: ${theme.f.lato};
    font-size: ${({ configuration: { fontSize } }) => fontSize};
    line-height: ${({ configuration: { lineHeight } }) => lineHeight};
`;
