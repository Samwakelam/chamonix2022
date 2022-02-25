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

import * as S from './page.styles';

export const Page = ({ children }: PageLayoutProps): JSX.Element => {
    // const { name, country, forecast } = pageData;

    // const groupByDate = getGroupedObject(forecast, 'date');
    // const keysByDate = Object.keys(groupByDate);

    // const [dateString, setDateString] = useState<string>(keysByDate[0]);
    // const [year, setYear] = useState<number>(2022);
    // const [displayCardData, setDisplayCardData] = useState<ForecastDataProps[]>([]);

    // const [dateOptions, setDateOptions] = useState<OptionProps[]>([]);

    // useEffect(() => {
    //     setDisplayCardData(groupByDate[dateString]);
    // }, [dateString]);

    // useEffect(() => {
    //     const date = new Date().getFullYear();
    //     setYear(date);
    // }, []);

    // useEffect(() => {
    //     const newArray = [];
    //     keysByDate.forEach((date) => {
    //         const formattedDate = getFormattedDate(date);
    //         newArray.push({ title: formattedDate, value: date });
    //     });
    //     setDateOptions(newArray);
    // }, []);

    return <S.Page>{children}</S.Page>;
};

{
    // const [isOpen, setIsOpen] = useState<boolean>(true);
    /* 
    const handleMenuCollapse = () => {
        setIsOpen(isOpen ? false : true);
    };
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
    </S.Main> */
}
