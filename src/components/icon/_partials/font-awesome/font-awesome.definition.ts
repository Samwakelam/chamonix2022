import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type FontAwesomeIcons = 'mountain' | 'snowflake' | 'city' | 'eye';

export type FontAwesomeIconMapProps = {
    [key in FontAwesomeIcons]: IconDefinition;
};
