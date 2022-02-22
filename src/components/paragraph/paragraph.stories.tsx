import React, { ComponentPropsWithoutRef } from 'react';
import { Meta, Story } from '@storybook/react';
import '@storybook/addon-console';

import { Paragraph as ParagraphComponent } from './paragraph.component';
import { ParagraphProps, ParagraphSizes } from './paragraph.definition';
import { ParagraphData } from './paragraph.data';

export default {
    component: ParagraphComponent,
    title: 'Atoms/Typography/Paragraph',
} as Meta;

const Paragraph: Story<
    ParagraphProps<React.ElementType> &
        Omit<ComponentPropsWithoutRef<React.ElementType>, keyof ParagraphProps<React.ElementType>>
> = ({ children, ...args }: ParagraphProps<React.ElementType>) => (
    <ParagraphComponent {...args}>{children}</ParagraphComponent>
);

export const Standard = Paragraph.bind({});

Standard.args = {
    children: ParagraphData.children,
    size: ParagraphSizes.STANDARD,
};

export const Small = Paragraph.bind({});

Small.args = {
    children: ParagraphData.children,
    size: ParagraphSizes.SMALL,
};

export const Large = Paragraph.bind({});

Large.args = {
    children: ParagraphData.children,
    size: ParagraphSizes.LARGE,
};
