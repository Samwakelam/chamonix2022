import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Toggle as ToggleComponent } from './toggle.component';
import { ToggleProps } from './toggle.definition';
import { theme } from '../../theme';

export default {
    component: ToggleComponent,
    title: 'Atoms/Toggle',
    args: {},
    parameters: {
        backgrounds: {
            default: theme.c.white.a,
        },
    },
} as Meta;

const Toggle: Story<ToggleProps> = (args) => <ToggleComponent {...args} />;

export const Default = Toggle.bind({});
Default.args = {
    isToggleOn: (item) => console.log('isToggleOn =', item),
};
