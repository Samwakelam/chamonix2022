import React from 'react';

export enum ParagraphSizes {
    SMALL = 'small',
    STANDARD = 'standard',
    LARGE = 'large',
}

export type SingleConfig = {
    fontSize: string;
    lineHeight: string;
};

export interface ParagraphProps<T extends React.ElementType> {
    as?: T;
    children: React.ReactNode;
    size?: ParagraphSizes;
}

export type ParagraphStyledProps = {
    configuration: SingleConfig;
};

export type ParagraphSizesShape = {
    [key: string]: SingleConfig;
};
