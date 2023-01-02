import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { ResortDataProps } from '../@types/resort-data.definition';

import { MockThreeDays } from '../../__mocks__/mock-three-days.data';
import { MockThreeHours } from '../../__mocks__/mock-three-hours.data';

import { Page } from '../layouts/page/page.layout';
import { IndexLayout } from '../layouts/index/index.layout';
import { HomeNavigation } from '../layouts/index/_partials/home-navigation/home-navigation.component';

import { resort } from '../maps/resort.map';

import { useIndex } from '../hooks/index.view-model';
import styled from 'styled-components';

type IndexProps = {
    resortData: ResortDataProps | null;
};

const IndexStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

const Index = ({ resortData }: IndexProps): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
        if (resortData === null) {
            router.push('/maps');
        }
    }, [router]);

    if (resortData === null) {
        return (
            <Page>
                <div></div>
                <IndexStyle>
                    <h1>Sorry for the inconvenience</h1>
                </IndexStyle>
            </Page>
        );
    }

    const { name, country } = resortData;

    const {
        state: { year, activeLevel, activeLocation, activeWeather, dateOptions, displayCardData },
        handlers: { handleClick, handleChange, handleLeftMountainClick, handleLeftResortClick },
    } = useIndex(resortData);

    return (
        <Page>
            <HomeNavigation
                resortConfig={{ name, year, country }}
                activeStates={{ activeLocation, activeLevel, activeWeather, dateOptions }}
                handleClick={handleClick}
                handleChange={handleChange}
                handleLeftMountainClick={handleLeftMountainClick}
                handleLeftResortClick={handleLeftResortClick}
            />
            <IndexLayout
                activeLocation={activeLocation}
                activeLevel={activeLevel}
                activeWeather={activeWeather}
                cardData={displayCardData}
            />
        </Page>
    );
};

export default Index;

export const getServerSideProps = async (): Promise<{ props: { resortData: ResortDataProps | null } }> => {
    const APP_ID = process.env.WU_APP_ID;
    const APP_KEY = process.env.WU_KEY;
    const RESORT = process.env.RESORT;

    const response = await fetch(
        `https://api.weatherunlocked.com/api/resortforecast/${resort[RESORT].id}?app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    let resortData = null;
    if (response.status === 500) {
        resortData = await response.json();
    }

    return {
        props: {
            resortData,
        },
    };
};
