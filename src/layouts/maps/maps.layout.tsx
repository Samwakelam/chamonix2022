import React from 'react';

import { Image } from '../../components/image/image.component';

export const MapsLayout = ({ mapsConfig, activeMap }) => {
    return <Image image={mapsConfig.filter((item) => item.label === activeMap)[0].image} />;
};
