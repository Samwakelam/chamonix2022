import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type IconProps = {
    className?: string;
    size?: number;
    icon: string;
};

export type IconOptions = Record<string, never>;

export type IconStyledProps = {
    className?: string;
    size?: number;
};

export type IconMapProps = {
    [keyof: string]: string | IconDefinition;
};
