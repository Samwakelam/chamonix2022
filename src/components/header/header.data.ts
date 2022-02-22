import { MountainLevelTypes, WeatherTypes } from '../../@types/resort-data.definition';
import { MountainLeftButtonsProps, ResortLeftButtonsProps } from './header.definition';

export const mountainLeftButtons: MountainLeftButtonsProps[] = [
    {
        data: MountainLevelTypes.BASE,
        heading: 'Base',
    },
    {
        data: MountainLevelTypes.MID,
        heading: 'Mid',
    },
    {
        data: MountainLevelTypes.UPPER,
        heading: 'Upper',
    },
];

export const resortLeftButtons: ResortLeftButtonsProps[] = [
    {
        data: WeatherTypes.GENERAL,
        heading: 'General',
    },
    {
        data: WeatherTypes.CLOUD,
        heading: 'Cloud',
    },
    {
        data: WeatherTypes.RAIN,
        heading: 'Snow',
    },
];
