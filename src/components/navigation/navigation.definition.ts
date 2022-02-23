import { LocationTypes, MountainLevelTypes, WeatherTypes } from '../../@types/resort-data.definition';

export type NavigationConfigProps = {
    continent: string;
    country: string;
    id: number;
    name: string;
};

export type NavigationProps = {
    navigationConfig?: NavigationConfigProps;
    setLevel: (item: MountainLevelTypes) => void;
    setLocation: (item: LocationTypes) => void;
    setWeather: (item: WeatherTypes) => void;
    setDate: (item: string) => void;
    setMap: (item: string) => void;
    availableDates?: string[];
    path: string;
};

export type MountainLeftButtonsProps = {
    data: MountainLevelTypes;
    heading: string;
};

export type ResortLeftButtonsProps = {
    data: WeatherTypes;
    heading: string;
};
