import { SpeedUnitTypes } from '../../../../providers/speed-unit.provider';

import { ForecastDataProps, WeatherTypes } from '../../../../@types/resort-data.definition';

export type ConfigProps = {
    weatherConfig: ForecastDataProps;
    weatherGroup: WeatherTypes;
};

export type ResortDataCardProps = {
    className?: string;
    weatherConfig: ConfigProps;
    units?: SpeedUnitTypes;
};

export type ResortDataCardStyledProps = {
    className?: string;
};

export type ResortButtonDataProps = {
    icon: string;
    title: string;
    key: string;
};

export type ResortButtons = {
    [keyof in WeatherTypes]: ResortButtonDataProps[];
};
