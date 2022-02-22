import React from 'react';
import { Meta, Story } from '@storybook/react';

import { MountainDataCard as MountainDataCardComponent } from './mountain-data-card.component';
import { MountainDataCardProps } from './mountain-data-card.definition';
import { MountainDataCardData } from './mountain-data-card.data';

export default {
    component: MountainDataCardComponent,
    title: 'Molecules/Cards/MountainDataCard',
    args: MountainDataCardData,
    decorators: [
        (story) => <div style={{ width: '225px', height: '667px', border: '1px solid black' }}>{story()}</div>,
    ],
} as Meta;

const MountainDataCard: Story<MountainDataCardProps> = (args) => <MountainDataCardComponent {...args} />;

export const Default = MountainDataCard.bind({});
