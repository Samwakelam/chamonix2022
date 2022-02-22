import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Scroller as ScrollerComponent } from './scroller.component';
import { ScrollerProps } from './scroller.definition';
import { MountainDataCard } from '../weather-cards/_partials/mountain-data-card/mountain-data-card.component';
import { MountainDataCardData } from '../weather-cards/_partials/mountain-data-card/mountain-data-card.data';

export default {
    component: ScrollerComponent,
    title: 'Molecules/Layouts/Scroller',
    args: {},
    decorators: [
        (story) => <div style={{ width: '225px', height: '667px', border: '1px solid black' }}>{story()}</div>,
    ],
} as Meta;

const Scroller: Story<ScrollerProps> = (args) => <ScrollerComponent {...args} />;

export const Default = Scroller.bind({});
Default.args = {
    children: [
        <MountainDataCard weatherConfig={MountainDataCardData.weatherConfig} />,
        <MountainDataCard weatherConfig={MountainDataCardData.weatherConfig} />,
        <MountainDataCard weatherConfig={MountainDataCardData.weatherConfig} />,
        <MountainDataCard weatherConfig={MountainDataCardData.weatherConfig} />,
    ],
};
