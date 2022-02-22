import { HeadingSizes, HeadingSizesShape } from './heading.definition';

export const headingSizes: HeadingSizesShape = {
    banner: {
        element: HeadingSizes.H1,
        fontSize: {
            mobile: 3.5,
            tablet: 4,
            desktop: 4.5,
        },
        lineHeight: {
            mobile: 4,
            tablet: 4.5,
            desktop: 5,
        },
    },
    h1: {
        element: HeadingSizes.H1,
        fontSize: {
            mobile: 2.5,
            tablet: 3,
            desktop: 3.2,
        },
        lineHeight: {
            mobile: 3,
            tablet: 3.5,
            desktop: 4,
        },
    },
    h2: {
        element: HeadingSizes.H2,
        fontSize: {
            mobile: 2,
            tablet: 2.5,
            desktop: 2.5,
        },
        lineHeight: {
            mobile: 2.5,
            tablet: 3,
            desktop: 3,
        },
    },
    h3: {
        element: HeadingSizes.H3,
        fontSize: {
            mobile: 1.8,
            tablet: 2,
            desktop: 2,
        },
        lineHeight: {
            mobile: 2.3,
            tablet: 2.5,
            desktop: 2.5,
        },
    },
    h4: {
        element: HeadingSizes.H4,
        fontSize: {
            mobile: 1.6,
            tablet: 1.6,
            desktop: 1.6,
        },
        lineHeight: {
            mobile: 2.1,
            tablet: 2.1,
            desktop: 2.1,
        },
    },
    h5: {
        element: HeadingSizes.H5,
        fontSize: {
            mobile: 1.4,
            tablet: 1.4,
            desktop: 1.4,
        },
        lineHeight: {
            mobile: 1.9,
            tablet: 1.9,
            desktop: 1.9,
        },
    },
    h6: {
        element: HeadingSizes.H6,
        fontSize: {
            mobile: 1.2,
            tablet: 1.2,
            desktop: 1.3,
        },
        lineHeight: {
            mobile: 1.7,
            tablet: 1.7,
            desktop: 1.8,
        },
    },
};
