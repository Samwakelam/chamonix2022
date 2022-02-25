import React, { useContext, useEffect, useState } from 'react';

import {
    ForecastDataProps,
    LocationTypes,
    MountainLevelTypes,
    WeatherTypes,
} from '../../@types/resort-data.definition';

import { SpeedUnitContext, SpeedUnitContextProps } from '../../providers/speed-unit.provider';
import { getCreateDate } from '../../helpers/get-create-date-object';

import { Scroller } from '../../components/scroller/scroller.component';
import { MountainDataCard } from '../../components/weather-cards/_partials/mountain-data-card/mountain-data-card.component';
import { ResortDataCard } from '../../components/weather-cards/_partials/resort-data-card/resort-data-card.component';
import { Icon } from '../../components/icon/icon.component';
import { ButtonTypes } from '../../components/button/button.definition';
import { Model } from '../../components/modal/model.component';
import { BarChart } from '../../components/graph/bar-chart.component';
import { DataProps } from '../../components/graph/bar-chart.definition';
import { Button } from '../../components/button/button.component';

import * as S from './index.styles';

type IndexLayoutProps = {
    activeLocation: LocationTypes;
    activeLevel: MountainLevelTypes;
    activeWeather: WeatherTypes;
    cardData: ForecastDataProps[];
};

export const IndexLayout = ({ activeLocation, activeLevel, activeWeather, cardData, snowStats }) => {
    const { speedUnit } = useContext<SpeedUnitContextProps>(SpeedUnitContext);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [graphData, setGraphData] = useState<DataProps[]>([]);

    const Component = activeLocation === LocationTypes.MOUNT ? MountainDataCard : ResortDataCard;

    const handleOpenModel = (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (graphData) setIsOpen(true);
    };

    const handleCloseModel = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setIsOpen(false);
    };

    useEffect(() => {
        const keys = Object.keys(snowStats);

        const newArray = [];
        for (let i = 0; i < keys.length; i++) {
            const arr: ForecastDataProps[] = snowStats[Object.keys(snowStats)[i]];

            const totalPrecipitation = arr.reduce((prev, curr) => {
                return prev + curr.precip_mm;
            }, 0);

            const totalSnowFall = arr.reduce((prev, curr) => {
                return prev + curr.snow_mm;
            }, 0);

            const label = getCreateDate(Object.keys(snowStats)[i]).toLocaleDateString('en-gb', { weekday: 'narrow' });

            const obj = {
                label,
                value1: totalSnowFall,
                value2: totalPrecipitation,
            };
            newArray.push(obj);
        }

        setGraphData(newArray);
    }, [snowStats]);

    return (
        <>
            <Scroller cardWidth="13.5rem">
                {cardData.map((report) => {
                    const config =
                        activeLocation === LocationTypes.MOUNT
                            ? report[activeLevel]
                            : { weatherConfig: report, weatherGroup: activeWeather };

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
            {activeLocation === LocationTypes.RESORT && (
                <S.Button buttonType={ButtonTypes.ICON} onClick={handleOpenModel}>
                    <Icon icon="stats" size={6} />
                </S.Button>
            )}
            {isOpen && graphData.length > 0 && (
                <Model handleClose={handleCloseModel}>
                    <BarChart data={graphData} />
                </Model>
            )}
        </>
    );
};
