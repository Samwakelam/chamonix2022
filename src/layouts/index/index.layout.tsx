import React, { useContext } from 'react';

import {
    ForecastDataProps,
    LocationTypes,
    MountainLevelTypes,
    WeatherTypes,
} from '../../@types/resort-data.definition';

import { SpeedUnitContext, SpeedUnitContextProps } from '../../providers/speed-unit.provider';

import { Scroller } from '../../components/scroller/scroller.component';
import { MountainDataCard } from '../../components/weather-cards/_partials/mountain-data-card/mountain-data-card.component';
import { ResortDataCard } from '../../components/weather-cards/_partials/resort-data-card/resort-data-card.component';

type IndexLayoutProps = {
    activeLocation: LocationTypes;
    activeLevel: MountainLevelTypes;
    activeWeather: WeatherTypes;
    cardData: ForecastDataProps[];
};

export const IndexLayout = ({
    activeLocation,
    activeLevel,
    activeWeather,
    cardData,
}: IndexLayoutProps): React.ReactElement<IndexLayoutProps> => {
    const { speedUnit } = useContext<SpeedUnitContextProps>(SpeedUnitContext);

    const Component = activeLocation === LocationTypes.MOUNT ? MountainDataCard : ResortDataCard;

    return (
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
    );
};
