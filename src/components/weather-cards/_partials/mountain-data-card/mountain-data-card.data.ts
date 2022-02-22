import { MountainButtonDataProps, MountainDataCardProps } from './mountain-data-card.definition';

export const MountainDataCardData: MountainDataCardProps = {
    weatherConfig: {
        wx_desc: 'Clear skies',
        wx_code: 0,
        wx_icon: 'Clear.gif',
        freshsnow_cm: 0,
        freshsnow_in: 0,
        temp_c: null,
        temp_f: null,
        feelslike_c: null,
        feelslike_f: null,
        winddir_deg: 5.9,
        winddir_compass: 'N',
        windspd_mph: 5,
        windspd_kmh: 8,
        windspd_kts: 4,
        windspd_ms: 2.3,
        windgst_mph: 11,
        windgst_kmh: 17,
        windgst_kts: 9,
        windgst_ms: 4.8,
    },
};

export const buttonData: MountainButtonDataProps[] = [
    {
        icon: 'temp',
        title: 'Temp:',
        key: 'temp_c',
    },
    {
        icon: 'tempEmpty',
        title: 'Feels Like:',
        key: 'feelslike_c',
    },
    {
        icon: 'snowflake',
        title: 'Fresh Snow:',
        key: 'freshsnow_cm',
    },
    {
        icon: 'windy',
        title: 'Speed:',
        key: 'windSpeed',
    },
    {
        icon: 'windGust',
        title: 'Gust:',
        key: 'windGust',
    },
];
