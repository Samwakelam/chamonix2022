import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { LocationTypes, MountainLevelTypes, WeatherTypes } from '../../@types/resort-data.definition';
import { getFormattedDate } from '../../helpers/get-formatted-date.helper';

import { ButtonTypes } from '../button/button.definition';
import { Button } from '../button/button.styles';
import { Icon } from '../icon/icon.component';
import { OptionProps } from '../select/select.definition';
import { HomeNavigation } from './_partials/home-navigation/home-navigation.component';

import { NavigationProps } from './navigation.definition';

import * as S from './navigation.styles';
import { MapsNavigation } from './_partials/maps-navigation/maps-navigation.component';

export const Navigation = ({
    navigationConfig,
    setLevel,
    setLocation,
    setWeather,
    setDate,
    setMap,
    availableDates,
    path,
}: NavigationProps): React.ReactElement<NavigationProps> => {
    const { name, country } = navigationConfig;

    const [year, setYear] = useState<number>(2022);
    const [activeLevel, setActiveLevel] = useState<MountainLevelTypes>(MountainLevelTypes.BASE);
    const [activeLocation, setActiveLocation] = useState<LocationTypes>(LocationTypes.RESORT);
    const [activeWeather, setActiveWeather] = useState<WeatherTypes>(WeatherTypes.GENERAL);
    const [dateOptions, setDateOptions] = useState<OptionProps[]>([]);

    useEffect(() => {
        const date = new Date().getFullYear();
        setYear(date);
    }, []);

    useEffect(() => {
        const newArray = [];
        availableDates.forEach((date) => {
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
                setLevel(MountainLevelTypes.BASE);
                setActiveLevel(MountainLevelTypes.BASE);
                break;
            case MountainLevelTypes.MID:
                setLevel(MountainLevelTypes.MID);
                setActiveLevel(MountainLevelTypes.MID);
                break;
            case MountainLevelTypes.UPPER:
                setLevel(MountainLevelTypes.UPPER);
                setActiveLevel(MountainLevelTypes.UPPER);
                break;
            default:
                setLevel(MountainLevelTypes.BASE);
                setActiveLevel(MountainLevelTypes.BASE);
                break;
        }
    };

    const handleLeftResortClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        switch (event.target.getAttribute('data-weather')) {
            case WeatherTypes.GENERAL:
                setWeather(WeatherTypes.GENERAL);
                setActiveWeather(WeatherTypes.GENERAL);
                break;
            case WeatherTypes.CLOUD:
                setWeather(WeatherTypes.CLOUD);
                setActiveWeather(WeatherTypes.CLOUD);
                break;
            case WeatherTypes.RAIN:
                setWeather(WeatherTypes.RAIN);
                setActiveWeather(WeatherTypes.RAIN);
                break;
            default:
                setWeather(WeatherTypes.GENERAL);
                setActiveWeather(WeatherTypes.GENERAL);
                break;
        }
    };

    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        switch (event.target.getAttribute('data-location')) {
            case LocationTypes.MOUNT:
                setLocation(LocationTypes.MOUNT);
                setActiveLocation(LocationTypes.MOUNT);
                break;
            case LocationTypes.RESORT:
                setLocation(LocationTypes.RESORT);
                setActiveLocation(LocationTypes.RESORT);
                break;
        }
    };

    const handleChange = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDate(event.target.value);
    };

    return (
        <S.Navigation path={path}>
            {path === '/' && (
                <HomeNavigation
                    config={{ name, year, country }}
                    activeStates={{ activeLocation, activeLevel, activeWeather, dateOptions }}
                    handleClick={handleClick}
                    handleChange={handleChange}
                    handleLeftMountainClick={handleLeftMountainClick}
                    handleLeftResortClick={handleLeftResortClick}
                />
            )}
            {path === '/maps' && <MapsNavigation handleMapSelect={setMap} />}
        </S.Navigation>
    );
};
