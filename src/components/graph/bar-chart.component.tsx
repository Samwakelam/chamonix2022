import React from 'react';

import { BarChartProps } from './bar-chart.definition';

import { BarTextContent } from './_partials/bar-text-content/bar-text-content.component';
import { Bar } from './_partials/bar/bar.component';

import * as S from './bar-chart.styles';

export const BarChart = ({ data }: BarChartProps): React.ReactElement<BarChartProps> => {
    return (
        <S.BarChartWrap>
            <S.BarChart>
                {data.map((item) => {
                    return (
                        <S.Wrapper>
                            <S.BarWrap>
                                <Bar percent={{ value1: item.value1, value2: item.value2 }} />
                            </S.BarWrap>
                            <BarTextContent>{item.label}</BarTextContent>
                        </S.Wrapper>
                    );
                })}
            </S.BarChart>
        </S.BarChartWrap>
    );
};
