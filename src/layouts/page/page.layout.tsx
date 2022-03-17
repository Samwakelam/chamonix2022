import React from 'react';

import { PageLayoutProps } from './page.definition';

import * as S from './page.styles';

export const Page = ({ children }: PageLayoutProps): JSX.Element => {
    return <S.Page>{children}</S.Page>;
};
