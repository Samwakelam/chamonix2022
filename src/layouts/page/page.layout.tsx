import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
    ForecastDataProps,
    LocationTypes,
    MountainLevelTypes,
    WeatherTypes,
} from '../../@types/resort-data.definition';

import { OptionProps } from '../../components/select/select.definition';
import { Button } from '../../components/button/button.styles';
import { ButtonTypes } from '../../components/button/button.definition';

import { getGroupedObject } from '../../helpers/get-grouped-object.helper';
import { getFormattedDate } from '../../helpers/get-formatted-date.helper';

import { MapsNavigation } from '../maps/_partials/maps-navigation/maps-navigation.component';
import { HomeNavigation } from '../index/_partials/home-navigation/home-navigation.component';
import { MapsLayout } from '../maps/maps.layout';
import { IndexLayout } from '../index/index.layout';

import { PageLayoutProps } from './page.definition';
import { MapData } from './page.data';

import * as S from './page.styles';
import { Icon } from '../../components/icon/icon.component';

export const Page = ({ pageData }: PageLayoutProps): JSX.Element => {
    if (!pageData) return null;

    const router = useRouter();

    const { name, country, forecast } = pageData;

    const groupByDate = getGroupedObject(forecast, 'date');
    const keysByDate = Object.keys(groupByDate);

    const [dateString, setDateString] = useState<string>(keysByDate[0]);
    const [year, setYear] = useState<number>(2022);
    const [displayCardData, setDisplayCardData] = useState<ForecastDataProps[]>([]);
    const [path, setPath] = useState<string>('/');
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const [activeMap, setActiveMap] = useState<string>(MapData[0].label);
    const [activeLevel, setActiveLevel] = useState<MountainLevelTypes>(MountainLevelTypes.BASE);
    const [activeLocation, setActiveLocation] = useState<LocationTypes>(LocationTypes.RESORT);
    const [activeWeather, setActiveWeather] = useState<WeatherTypes>(WeatherTypes.GENERAL);

    const [dateOptions, setDateOptions] = useState<OptionProps[]>([]);

    useEffect(() => {
        setDisplayCardData(groupByDate[dateString]);
    }, [dateString]);

    useEffect(() => {
        if (router) {
            setPath(router.pathname);
        }
    }, [router]);

    useEffect(() => {
        const date = new Date().getFullYear();
        setYear(date);
    }, []);

    useEffect(() => {
        const newArray = [];
        keysByDate.forEach((date) => {
            const formattedDate = getFormattedDate(date);
            newArray.push({ title: formattedDate, value: date });
        });
        setDateOptions(newArray);
    }, []);

    const handleLeftMountainClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        switch (event.target.getAttribute('data-level')) {
            case MountainLevelTypes.BASE:
                setActiveLevel(MountainLevelTypes.BASE);
                break;
            case MountainLevelTypes.MID:
                setActiveLevel(MountainLevelTypes.MID);
                break;
            case MountainLevelTypes.UPPER:
                setActiveLevel(MountainLevelTypes.UPPER);
                break;
            default:
                setActiveLevel(MountainLevelTypes.BASE);
                break;
        }
    };

    const handleLeftResortClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        switch (event.target.getAttribute('data-weather')) {
            case WeatherTypes.GENERAL:
                setActiveWeather(WeatherTypes.GENERAL);
                break;
            case WeatherTypes.CLOUD:
                setActiveWeather(WeatherTypes.CLOUD);
                break;
            case WeatherTypes.RAIN:
                setActiveWeather(WeatherTypes.RAIN);
                break;
            default:
                setActiveWeather(WeatherTypes.GENERAL);
                break;
        }
    };

    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        switch (event.target.getAttribute('data-location')) {
            case LocationTypes.MOUNT:
                setActiveLocation(LocationTypes.MOUNT);
                break;
            case LocationTypes.RESORT:
                setActiveLocation(LocationTypes.RESORT);
                break;
        }
    };

    const handleChange = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDateString(event.target.value);
    };

    const handleMenuCollapse = () => {
        setIsOpen(isOpen ? false : true);
    };

    return (
        <S.Page>
            <S.Navigation path={path} collapse={!isOpen}>
                {path === '/' && isOpen && (
                    <HomeNavigation
                        resortConfig={{ name, year, country }}
                        activeStates={{ activeLocation, activeLevel, activeWeather, dateOptions }}
                        handleClick={handleClick}
                        handleChange={handleChange}
                        handleLeftMountainClick={handleLeftMountainClick}
                        handleLeftResortClick={handleLeftResortClick}
                    />
                )}
                {path === '/maps' && isOpen && <MapsNavigation handleMapSelect={setActiveMap} />}
            </S.Navigation>
            <S.Main>
                <S.Button
                    buttonType={ButtonTypes.LEFT}
                    round
                    onClick={handleMenuCollapse}
                    onCollapse={!isOpen}
                    path={path}
                >
                    <Icon icon="chevron-back" />
                </S.Button>
                {path === '/' && (
                    <IndexLayout
                        activeLocation={activeLocation}
                        activeLevel={activeLevel}
                        activeWeather={activeWeather}
                        cardData={displayCardData}
                    />
                )}
                {path === '/maps' && <MapsLayout mapsConfig={MapData} activeMap={activeMap} />}
            </S.Main>
        </S.Page>
    );
};
