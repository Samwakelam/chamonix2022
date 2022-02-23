import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
    ForecastDataProps,
    LocationTypes,
    MountainLevelTypes,
    WeatherTypes,
} from '../../@types/resort-data.definition';

import { SpeedUnitContext, SpeedUnitContextProps } from '../../providers/speed-unit.provider';

import { Navigation } from '../../components/navigation/navigation.component';
import { Scroller } from '../../components/scroller/scroller.component';
import { MountainDataCard } from '../../components/weather-cards/_partials/mountain-data-card/mountain-data-card.component';
import { ResortDataCard } from '../../components/weather-cards/_partials/resort-data-card/resort-data-card.component';
import { Image } from '../../components/image/image.component';

import { getGroupedObject } from '../../helpers/get-grouped-object.helper';

import { PageLayoutProps } from './page.definition';
import { MapData } from './page.data';

import * as S from './page.styles';

export const Page = ({ pageData }: PageLayoutProps): JSX.Element => {
    if (!pageData) return null;

    const { speedUnit } = useContext<SpeedUnitContextProps>(SpeedUnitContext);
    const router = useRouter();

    const { id, name, country, continent, forecast } = pageData;
    const navigationConfig = {
        id,
        name,
        country,
        continent,
    };

    const groupByDate = getGroupedObject(forecast, 'date');
    const keysByDate = Object.keys(groupByDate);

    const [level, setLevel] = useState<string>(MountainLevelTypes.BASE);
    const [location, setLocation] = useState<string>(LocationTypes.RESORT);
    const [weather, setWeather] = useState<string>(WeatherTypes.GENERAL);
    const [date, setDate] = useState<string>(keysByDate[0]);
    const [displayCardData, setDisplayCardData] = useState<ForecastDataProps[]>([]);
    const [path, setPath] = useState<string>('/');
    const [map, setMap] = useState<string>(MapData[0].label);

    useEffect(() => {
        setDisplayCardData(groupByDate[date]);
    }, [date]);

    useEffect(() => {
        if (router) {
            setPath(router.pathname);
        }
    }, [router]);

    return (
        <S.Page>
            <Navigation
                navigationConfig={navigationConfig}
                setLevel={setLevel}
                setLocation={setLocation}
                setWeather={setWeather}
                setDate={setDate}
                setMap={setMap}
                availableDates={keysByDate}
                path={path}
            />
            <S.Main>
                {path === '/' && (
                    <Scroller cardWidth="13.5rem">
                        {displayCardData.map((report) => {
                            const Component = location === LocationTypes.MOUNT ? MountainDataCard : ResortDataCard;
                            const config =
                                location === LocationTypes.MOUNT
                                    ? report[level]
                                    : { weatherConfig: report, weatherGroup: weather };
                            return (
                                <Component
                                    key={`${report.date}-${report.time}`}
                                    weatherConfig={config}
                                    units={speedUnit}
                                    date={report.date}
                                    time={report.time}
                                />
                            );
                        })}
                    </Scroller>
                )}
                {path === '/maps' && <Image image={MapData.filter((item) => item.label === map)[0].image} />}
            </S.Main>
        </S.Page>
    );
};
