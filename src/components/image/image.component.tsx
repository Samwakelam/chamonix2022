import React from 'react';

import { device } from '../../theme/device.object';

import { ImageProps } from './image.definition';

import * as S from './image.styles';

export const Image = ({ image }: { image: ImageProps }): React.ReactElement<ImageProps> => {
    const { mobile, alt, fit } = image;

    return (
        <S.Image fit={fit}>
            <source srcSet={mobile} media={device.mobile} />
            <img src={mobile} alt={alt} />
        </S.Image>
    );
};
