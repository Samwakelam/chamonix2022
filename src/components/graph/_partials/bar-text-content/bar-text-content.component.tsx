import React from 'react';
import { Paragraph, ParagraphSizes } from '../../../paragraph';

import { BarTextContentProps } from './bar-text-content.definition';

import * as S from './bar-text-content.styles';

export const BarTextContent = ({
    isVertical,
    children,
}: BarTextContentProps): React.ReactElement<BarTextContentProps> => {
    return (
        <S.BarTextContent isVertical={isVertical}>
            <Paragraph size={ParagraphSizes.STANDARD}>{children}</Paragraph>
        </S.BarTextContent>
    );
};
