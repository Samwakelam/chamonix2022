export enum ImageFitType {
    FILL = 'fill',
    CONTAIN = 'contain',
    COVER = 'cover',
    NONE = 'none',
    SCALE_DOWN = 'scale-down',
}

export type ImageProps = {
    mobile: string;
    alt: string;
    fit?: ImageFitType;
};

export type ImageStyledProps = {
    fit?: ImageFitType;
};
