import React from 'react';
import { Meta, Story } from '@storybook/react';

import { BarChart as BarChartComponent } from './bar-chart.component';
import { BarChartProps } from './bar-chart.definition';
import { mockBarData } from './bar-chart.data';

export default {
    component: BarChartComponent,
    title: 'Molecules/BarChart',
} as Meta;

const BarChart: Story<BarChartProps> = (args) => <BarChartComponent {...args} />;

export const Default = BarChart.bind({});

Default.args = {
    data: mockBarData,
};
