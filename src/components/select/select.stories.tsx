import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Select as SelectComponent } from './select.component';
import { SelectProps } from './select.definition';
import { SelectData } from './select.data';

export default {
    component: SelectComponent,
    title: 'Atoms/Select',
    args: SelectData,
} as Meta;

const Select: Story<SelectProps> = (args) => <SelectComponent {...args} />;

export const Default = Select.bind({});
