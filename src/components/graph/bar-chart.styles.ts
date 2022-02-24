import styled from 'styled-components';

import { theme } from '../../theme';

import { BarChartStyledProps } from './bar-chart.definition';

export const BarChart = styled.article<BarChartStyledProps>`
    position: relative;
    height: 40rem;
    width: fit-content;
`;

export const BarChartWrap = styled.div`
    background-color: ${theme.c.white.a};
    border-radius: 2rem;
    padding: 5rem;
    width: fit-content;
`;

export const BarWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80%;
    position: relative;
    align-items: flex-end;
`;

export const Wrapper = styled.div`
    width: 5rem;
    height: 100%;
    display: inline-block;
`;
