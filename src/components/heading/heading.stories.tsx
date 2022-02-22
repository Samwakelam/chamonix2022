import React from 'react';

import { Meta, Story } from '@storybook/react';
import '@storybook/addon-console';

import { Heading as HeadingComponent } from './heading.component';
import { HeadingProps, HeadingSizes } from './heading.definition';
import { HeadingData } from './heading.data';

export default {
    component: HeadingComponent,
    title: 'Atoms/Typography/Heading',
} as Meta;

const Heading: Story<HeadingProps> = ({ children, ...args }: HeadingProps) => (
    <HeadingComponent {...args}>{children}</HeadingComponent>
);

export const Banner = Heading.bind({});

Banner.args = {
    children: HeadingData.children,
    size: HeadingSizes.BANNER,
};

export const H1 = Heading.bind({});

H1.args = {
    children: HeadingData.children,
    size: HeadingSizes.H1,
};

export const H2 = Heading.bind({});

H2.args = {
    children: HeadingData.children,
    size: HeadingSizes.H2,
};

export const H3 = Heading.bind({});

H3.args = {
    children: HeadingData.children,
    size: HeadingSizes.H3,
};

export const H4 = Heading.bind({});

H4.args = {
    children: HeadingData.children,
    size: HeadingSizes.H4,
};

export const H5 = Heading.bind({});

H5.args = {
    children: HeadingData.children,
    size: HeadingSizes.H5,
};

export const H6 = Heading.bind({});

H6.args = {
    children: HeadingData.children,
    size: HeadingSizes.H6,
};
