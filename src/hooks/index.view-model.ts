import { useEffect, useState } from 'react';
import {
    ForecastDataProps,
    LocationTypes,
    MountainLevelTypes,
    ResortDataProps,
    WeatherTypes,
} from '../@types/resort-data.definition';
import { OptionProps } from '../components/select/select.definition';
import { getFormattedDate } from '../helpers/get-formatted-date.helper';
import { getGroupedObject } from '../helpers/get-grouped-object.helper';

export type IndexState = {
    dateString: string;
    year: number;
    displayCardData: ForecastDataProps[];
    path: string;
    isOpen: boolean;
    activeLevel: MountainLevelTypes;
    activeLocation: LocationTypes;
    activeWeather: WeatherTypes;
    dateOptions: OptionProps[];
};

export type IndexHandlers = {
    handleClick: (event: any) => void;
    handleChange: (event: any) => void;
    handleLeftMountainClick: (event: any) => void;
    handleLeftResortClick: (event: any) => void;
};

export type ViewModel<S, H> = {
    state: S;
    handlers: H;
};

export const useIndex = (resortData: ResortDataProps): ViewModel<IndexState, IndexHandlers> => {
    const { name, country, forecast } = resortData;

    const groupByDate = getGroupedObject(forecast, 'date');
    const keysByDate = Object.keys(groupByDate);

    const [state, setState] = useState<IndexState>({
        dateString: keysByDate[0],
        year: new Date().getFullYear(),
        displayCardData: [],
        path: '/',
        isOpen: true,
        activeLevel: MountainLevelTypes.BASE,
        activeLocation: LocationTypes.RESORT,
        activeWeather: WeatherTypes.GENERAL,
        dateOptions: [],
    });

    const handleClick = (event: any): void => {
        event.preventDefault();
        event.stopPropagation();

        const location = event.target.getAttribute('data-location');

        setState((prev) => ({ ...prev, activeLocation: location }));
    };

    const handleChange = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        const dateString = event.target.value;

        setState((prev) => ({ ...prev, dateString }));
    };

    const handleLeftMountainClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const activeLevel = event.target.getAttribute('data-level');

        setState((prev) => ({ ...prev, activeLevel }));
    };

    const handleLeftResortClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const activeWeather = event.target.getAttribute('data-weather');

        setState((prev) => ({ ...prev, activeWeather }));
    };

    useEffect(() => {
        const currDateString = state.dateString;
        const displayCardData = groupByDate[currDateString];

        setState((prev) => ({ ...prev, displayCardData }));
    }, [state.dateString]);

    useEffect(() => {
        const dateOptions = [];
        keysByDate.forEach((date) => {
            const formattedDate = getFormattedDate(date);
            dateOptions.push({ title: formattedDate, value: date });
        });

        setState((prev) => ({ ...prev, dateOptions }));
    }, []);

    return {
        state,
        handlers: {
            handleClick,
            handleChange,
            handleLeftMountainClick,
            handleLeftResortClick,
        },
    };
};
