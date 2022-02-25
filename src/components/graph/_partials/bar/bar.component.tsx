import React from 'react';

import { BarProps } from './bar.definition';

import * as S from './bar.styles';

export const Bar = ({ percent }: BarProps): React.ReactElement<BarProps> => {
    const { value1, value2 } = percent;

    return (
        <S.BarBackground percent={value2}>
            <S.Bar percent={value2 ? (value1 / value2) * 100 : value1} />
        </S.BarBackground>
    );
};
