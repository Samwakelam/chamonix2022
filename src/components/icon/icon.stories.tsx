import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Icon as IconComponent } from './icon.component';
import { IconProps } from './icon.definition';

export default {
    component: IconComponent,
    title: 'Atoms/Icon',
    args: {
        children: 'Button',
    },
} as Meta;

const Icon: Story<IconProps> = (args) => <IconComponent {...args} />;

export const Sun = Icon.bind({});
Sun.args = {
    className: 'wi wi-day-sunny',
    size: 6,
};
