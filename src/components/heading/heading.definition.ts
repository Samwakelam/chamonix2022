export enum HeadingSizes {
    BANNER = 'banner',
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

type SizeObject = {
    mobile: number;
    tablet: number;
    desktop: number;
};

type SingleHeading = {
    element: HeadingSizes;
    fontSize: SizeObject;
    lineHeight: SizeObject;
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    size: HeadingSizes;
}

export type HeadingSizesShape = {
    [key: string]: SingleHeading;
};

export type HeadingStyledProps = {
    configuration: SingleHeading;
};
