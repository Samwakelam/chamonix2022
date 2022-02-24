import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type FontAwesomeIcons = 'mountain' | 'snowflake' | 'city' | 'eye' | 'map' | 'chevron-back' | 'stats' | 'x';

export type FontAwesomeIconMapProps = {
    [key in FontAwesomeIcons]: IconDefinition;
};
