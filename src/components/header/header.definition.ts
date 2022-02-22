import { LocationTypes, MountainLevelTypes, WeatherTypes } from '../../@types/resort-data.definition';

export type HeaderConfigProps = {
    continent: string;
    country: string;
    id: number;
    name: string;
};

export type HeaderProps = {
    headerConfig?: HeaderConfigProps;
    setLevel: (item: MountainLevelTypes) => void;
    setLocation: (item: LocationTypes) => void;
    setWeather: (item: WeatherTypes) => void;
    setDate: (item: string) => void;
    availableDates?: string[];
};

export type MountainLeftButtonsProps = {
    data: MountainLevelTypes;
    heading: string;
};

export type ResortLeftButtonsProps = {
    data: WeatherTypes;
    heading: string;
};
