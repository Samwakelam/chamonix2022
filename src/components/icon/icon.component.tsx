import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { IconMapProps, IconProps } from './icon.definition';

import { compassIconMap } from './_partials/compass/compass.map';
import { fontAwesomeIconMap } from './_partials/font-awesome/font-awesome.map';
import { timeIconMap } from './_partials/time/time.map';
import { weatherIconMap } from './_partials/weather/weather.map';

import * as S from './icon.styles';

const iconMap: IconMapProps = {
    ...weatherIconMap,
    ...timeIconMap,
    ...compassIconMap,
    ...fontAwesomeIconMap,
};

const fontAwesomeIcons = Object.keys(fontAwesomeIconMap);

export const Icon = ({ className, icon, size }: IconProps): React.ReactElement<IconProps> => {
    if (fontAwesomeIcons.includes(icon)) {
        return <FontAwesomeIcon icon={fontAwesomeIconMap[icon]} />;
    }
    return <S.Icon className={`${className ? className : ''} ${iconMap[icon]}`} size={size} />;
};
