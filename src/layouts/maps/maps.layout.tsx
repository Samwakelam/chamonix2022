import React from 'react';

import { Image } from '../../components/image/image.component';
import { MapDataProps } from '../../maps/resort.map';

export const MapsLayout = ({ mapsConfig, activeMap }: { mapsConfig: MapDataProps[]; activeMap: string }) => {
    return <Image image={mapsConfig.filter((item) => item.label === activeMap)[0].image} />;
};
