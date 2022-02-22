export enum MountainLevelTypes {
    BASE = 'base',
    MID = 'mid',
    UPPER = 'upper',
}

export enum WeatherTypes {
    CLOUD = 'cloudCoverage',
    RAIN = 'precipitation',
    GENERAL = 'general',
}

export enum LocationTypes {
    RESORT = 'resort',
    MOUNT = 'mountain',
}

export type MountainDataProps = {
    feelslike_c: number;
    feelslike_f: number;
    freshsnow_cm: number;
    freshsnow_in: number;
    temp_c: number;
    temp_f: number;
    winddir_compass: string;
    winddir_deg: number;
    windgst_kmh: number;
    windgst_kts: number;
    windgst_mph: number;
    windgst_ms: number;
    windspd_kmh: number;
    windspd_kts: number;
    windspd_mph: number;
    windspd_ms: number;
    wx_code: number;
    wx_desc: string;
    wx_icon: string;
};

export type ForecastDataProps = {
    base: MountainDataProps;
    date: string;
    dewpoint_c: number;
    dewpoint_f: number;
    frzglvl_ft: number;
    frzglvl_m: number;
    highcloud_pct: number;
    hum_pct: number;
    lowcloud_pct: number;
    mid: MountainDataProps;
    midcloud_pct: number;
    precip_in: number;
    precip_mm: number;
    rain_in: number;
    rain_mm: number;
    slp_in: number;
    slp_mb: number;
    snow_in: number;
    snow_mm: number;
    time: string;
    totalcloud_pct: number;
    upper: MountainDataProps;
    vis_km: number;
    vis_mi: number;
};

export type ResortDataProps = {
    continent: string;
    country: string;
    id: number;
    name: string;
    forecast: ForecastDataProps[];
};
