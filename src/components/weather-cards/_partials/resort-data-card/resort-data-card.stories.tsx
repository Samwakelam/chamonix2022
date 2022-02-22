import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ResortDataCard as ResortDataCardComponent } from './resort-data-card.component';
import { ResortDataCardProps } from './resort-data-card.definition';
import { ForecastDataCardData } from './resort-data-card.data';

export default {
    component: ResortDataCardComponent,
    title: 'Molecules/Cards/ResortDataCard',
    args: ForecastDataCardData,
    decorators: [
        (story) => <div style={{ width: '225px', height: '667px', border: '1px solid black' }}>{story()}</div>,
    ],
} as Meta;

const ResortDataCard: Story<ResortDataCardProps> = (args) => <ResortDataCardComponent {...args} />;

export const Default = ResortDataCard.bind({});
