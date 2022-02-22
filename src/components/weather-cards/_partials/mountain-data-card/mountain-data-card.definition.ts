import { MountainDataProps } from '../../../../@types/resort-data.definition';
import { SpeedUnitTypes } from '../../../../providers/speed-unit.provider';

export type MountainDataCardProps = {
    className?: string;
    weatherConfig: MountainDataProps;
    date?: string;
    time?: string;
    units?: SpeedUnitTypes;
};

export type MountainDataCardStyledProps = {
    className?: string;
};

export type MountainButtonDataProps = {
    icon: string;
    title: string;
    key: string;
};
