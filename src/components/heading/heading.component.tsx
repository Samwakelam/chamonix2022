import React from 'react';

import { HeadingProps, HeadingSizes } from './heading.definition';
import { headingSizes } from './heading.shape';

import * as S from './heading.styles';

export const Heading = ({ children, size = HeadingSizes.BANNER, ...props }: HeadingProps): JSX.Element => (
    <S.Heading configuration={headingSizes[size]} as={headingSizes[size].element} {...props}>
        {children}
    </S.Heading>
);
