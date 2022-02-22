import React, { ComponentPropsWithoutRef } from 'react';

import { ParagraphProps, ParagraphSizes } from './paragraph.definition';
import { paragraphSizes } from './paragraph.shape';

import * as S from './paragraph.styles';

export const Paragraph = <T extends React.ElementType = 'p'>({
    children,
    size = ParagraphSizes.STANDARD,
}: ParagraphProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ParagraphProps<T>>): React.ReactElement<
    ParagraphProps<T>
> => <S.Paragraph configuration={paragraphSizes[size]}>{children}</S.Paragraph>;
