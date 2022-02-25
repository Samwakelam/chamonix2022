import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { MockThreeDays } from '../../__mocks__/mock-three-days.data';

import { ResortDataProps } from '../@types/resort-data.definition';
import { Scroller } from '../components/scroller/scroller.styles';
import { MainContainer } from '../layouts/main-container/main-container.component';
import { MapsLayout } from '../layouts/maps/maps.layout';
import { MapsNavigation } from '../layouts/maps/_partials/maps-navigation/maps-navigation.component';
import { NavigationContainer } from '../layouts/navigation-container/navigation-container.component';
import { MapData } from '../layouts/page/page.data';

import { Page } from '../layouts/page/page.layout';

type MapsPageProps = {
    resortData: ResortDataProps;
};

const Maps = ({ resortData }: MapsPageProps): JSX.Element => {
    const router = useRouter();
    const [activeMap, setActiveMap] = useState<string>(MapData[0].label);

    return (
        <Page>
            <NavigationContainer page={router.pathname} isOpen={true}>
                <MapsNavigation handleMapSelect={setActiveMap} />
            </NavigationContainer>
            <MainContainer>
                <MapsLayout mapsConfig={MapData} activeMap={activeMap} />
            </MainContainer>
        </Page>
    );
};

export default Maps;

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
