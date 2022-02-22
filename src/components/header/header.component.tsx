import React, { useContext, useEffect, useState } from 'react';

import { LocationTypes, MountainLevelTypes, WeatherTypes } from '../../@types/resort-data.definition';
import { getFormattedDate } from '../../helpers/get-formatted-date.helper';

import { SpeedUnitContext } from '../../providers/speed-unit.provider';

import { ButtonTypes } from '../button/button.definition';
import { Button } from '../button/button.styles';
import { Heading } from '../heading/heading.component';
import { HeadingSizes } from '../heading/heading.definition';
import { Icon } from '../icon/icon.component';
import { Select } from '../select/select.component';
import { OptionProps } from '../select/select.definition';
import { Toggle } from '../toggle/toggle.component';

import { mountainLeftButtons, resortLeftButtons } from './header.data';
import { HeaderProps } from './header.definition';

import * as S from './header.styles';

export const Header = ({
    headerConfig,
    setLevel,
    setLocation,
    setWeather,
    setDate,
    availableDates,
}: HeaderProps): React.ReactElement<HeaderProps> => {
    const { id, name, country, continent } = headerConfig;

    const { setMPH, setKMH } = useContext(SpeedUnitContext);

    const [year, setYear] = useState<number>(2022);
    const [activeLevel, setActiveLevel] = useState<string>(MountainLevelTypes.BASE);
    const [activeLocation, setActiveLocation] = useState<string>(LocationTypes.RESORT);
    const [activeWeather, setActiveWeather] = useState<string>(WeatherTypes.GENERAL);
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

    const handleToggle = (item: boolean) => {
        switch (item) {
            case false:
                setMPH();
                break;
            case true:
                setKMH();
                break;
        }
    };

    const handleChange = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDate(event.target.value);
    };

    return (
        <S.Header>
            <S.TitleWrap>
                <Heading size={HeadingSizes.H1}>{name}</Heading>
                <Heading size={HeadingSizes.H2}>{year}</Heading>
                <Heading size={HeadingSizes.H2}>{country}</Heading>
            </S.TitleWrap>
            <S.RoundButtonWrap>
                <Button
                    round
                    buttonType={ButtonTypes.ICON}
                    data-active={activeLocation === LocationTypes.MOUNT}
                    data-location={LocationTypes.MOUNT}
                    onClick={(e) => handleClick(e)}
                >
                    <Icon icon={'mountain'} />
                </Button>
                <Button
                    round
                    buttonType={ButtonTypes.ICON}
                    data-active={activeLocation === LocationTypes.RESORT}
                    data-location={LocationTypes.RESORT}
                    onClick={(e) => handleClick(e)}
                >
                    <Icon icon={'city'} />
                </Button>
            </S.RoundButtonWrap>
            <S.LeftButtonWrap>
                {activeLocation === LocationTypes.MOUNT &&
                    mountainLeftButtons.map(({ data, heading }, index) => (
                        <Button
                            data-active={activeLevel === data}
                            data-level={data}
                            round
                            buttonType={ButtonTypes.LEFT}
                            className="left"
                            onClick={(e) => handleLeftMountainClick(e)}
                            key={data + index}
                        >
                            <Heading size={HeadingSizes.H3}>{heading}</Heading>
                        </Button>
                    ))}
                {activeLocation === LocationTypes.RESORT &&
                    resortLeftButtons.map(({ data, heading }, index) => (
                        <Button
                            data-active={activeWeather === data}
                            data-weather={data}
                            round
                            buttonType={ButtonTypes.LEFT}
                            className="left"
                            onClick={(e) => handleLeftResortClick(e)}
                            key={data + index}
                        >
                            <Heading size={HeadingSizes.H3}>{heading}</Heading>
                        </Button>
                    ))}
            </S.LeftButtonWrap>
            <Select options={dateOptions} onChange={handleChange} />
            <S.ToggleWrap>
                <Heading size={HeadingSizes.H3}>MILES</Heading>
                <Toggle isToggleOn={handleToggle} />
                <Heading size={HeadingSizes.H3}>KM</Heading>
            </S.ToggleWrap>
        </S.Header>
    );
};
