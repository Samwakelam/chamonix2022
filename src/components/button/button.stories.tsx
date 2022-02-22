import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button as ButtonComponent } from './button.component';
import { ButtonProps, ButtonTypes } from './button.definition';
import { Icon as IconComponent } from '../icon/icon.component';

export default {
    component: ButtonComponent,
    title: 'Atoms/Button',
    args: {
        children: 'Button',
    },
} as Meta;

const Button: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;

export const Primary = Button.bind({});

export const Round = Button.bind({});

Round.args = {
    round: true,
};

export const Secondary = Button.bind({});
Secondary.args = {
    buttonType: ButtonTypes.SECONDARY,
};

export const Left = Button.bind({});
Left.args = {
    buttonType: ButtonTypes.LEFT,
    round: true,
};

export const Icon = Button.bind({});
Icon.args = {
    buttonType: ButtonTypes.ICON,
    children: [<IconComponent icon="sunny" />],
};

export const IconRound = Button.bind({});
IconRound.args = {
    buttonType: ButtonTypes.ICON,
    round: true,
    children: [<IconComponent icon="sunny" />],
};
