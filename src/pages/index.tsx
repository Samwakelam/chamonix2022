import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MockThreeDays } from '../../__mocks__/mock-three-days.data';

import { LocationTypes, MountainLevelTypes, ResortDataProps, WeatherTypes } from '../@types/resort-data.definition';
import { ButtonTypes } from '../components/button/button.definition';
import { Icon } from '../components/icon/icon.component';
import { IndexLayout } from '../layouts/index/index.layout';
import { HomeNavigation } from '../layouts/index/_partials/home-navigation/home-navigation.styles';
import { MainContainer } from '../layouts/main-container/main-container.component';
import { NavigationContainer } from '../layouts/navigation-container/navigation-container.component';

import { Page } from '../layouts/page/page.layout';
import * as S from '../layouts/page/page.styles';

type IndexPageProps = {
    resortData: ResortDataProps;
};

const Index = ({ resortData }: IndexPageProps): JSX.Element => {
    const router = useRouter();
    const { country, name, forecast } = resortData;

    const [isOpen, setIsOpen] = useState<boolean>(true);

    const [activeLevel, setActiveLevel] = useState<MountainLevelTypes>(MountainLevelTypes.BASE);
    const [activeWeather, setActiveWeather] = useState<WeatherTypes>(WeatherTypes.GENERAL);
    const [activeLocation, setActiveLocation] = useState<LocationTypes>(LocationTypes.RESORT);

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

    useEffect(() => {
        console.log('useEffect');
    }, []);

    return (
        <Page>
            <NavigationContainer page={router.pathname} isOpen={isOpen}>
                {isOpen && (
                    <HomeNavigation
                        resortConfig={{ name, year, country }}
                        activeStates={{ activeLocation, activeLevel, activeWeather, dateOptions }}
                        handleClick={handleClick}
                        handleChange={handleChange}
                        handleLeftMountainClick={handleLeftMountainClick}
                        handleLeftResortClick={handleLeftResortClick}
                    />
                )}
            </NavigationContainer>
            <S.Button
                buttonType={ButtonTypes.LEFT}
                round
                onClick={handleMenuCollapse}
                onCollapse={!isOpen}
                path={router.pathname}
            >
                <Icon icon="chevron-back" />
            </S.Button>
            <MainContainer>
                <IndexLayout
                    activeLocation={activeLocation}
                    activeLevel={activeLevel}
                    activeWeather={activeWeather}
                    cardData={displayCardData}
                />
            </MainContainer>
        </Page>
    );
};

export default Index;

export const getStaticProps = async (): Promise<{ props: { resortData: ResortDataProps } }> => {
    // const APP_ID = process.env.WU_APP_ID;
    // const APP_KEY = process.env.WU_KEY;

    // const response = await fetch(
    //     `https://api.weatherunlocked.com/api/resortforecast/333003?num_of_days=3&app_id=${APP_ID}&app_key=${APP_KEY}`
    // );

    // const resortData = await response.json();

    return {
        props: {
            // resortData: resortData as ResortDataProps,
            resortData: MockThreeDays as ResortDataProps,
        },
    };
};
