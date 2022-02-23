import { ChangeEvent, MouseEvent } from 'react';
import { LocationTypes, MountainLevelTypes, WeatherTypes } from '../../../../@types/resort-data.definition';
import { OptionProps } from '../../../select/select.definition';

export type ConfigProps = {
    name: string;
    year: number;
    country: string;
};

export type ActiveStateProps = {
    activeLocation: LocationTypes;
    activeLevel: MountainLevelTypes;
    activeWeather: WeatherTypes;
    dateOptions: OptionProps[];
};

export type HomeNavigationProps = {
    config: ConfigProps;
    activeStates: ActiveStateProps;
    handleClick: (item: any) => void;
    handleChange: (item: ChangeEvent<HTMLSelectElement>) => void;
    handleLeftMountainClick: (item: any) => void;
    handleLeftResortClick: (item: any) => void;
};

export type HomeNavigationStyledProps = {};
