import React, { useState } from 'react';

import { resort as resortMap, ResortProps } from '../maps/resort.map';

import { Page } from '../layouts/page/page.layout';
import { MapsNavigation } from '../layouts/maps/_partials/maps-navigation/maps-navigation.component';
import { MapsLayout } from '../layouts/maps/maps.layout';

const Maps = ({ resort }: { resort: ResortProps }): JSX.Element => {
    const [activeMap, setActiveMap] = useState<string>(resort.maps[0].label);

    return (
        <Page>
            <MapsNavigation handleMapSelect={setActiveMap} mapsConfig={resort.maps} activeMap={activeMap} />
            <MapsLayout mapsConfig={resort.maps} activeMap={activeMap} />
        </Page>
    );
};

export default Maps;

export const getServerSideProps = async (): Promise<{ props: { resort: ResortProps } }> => {
    const APP_ID = process.env.WU_APP_ID;
    const APP_KEY = process.env.WU_KEY;
    const RESORT = process.env.RESORT;

    const response = await fetch(
        `https://api.weatherunlocked.com/api/resortforecast/${resortMap[RESORT].id}?app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const resortData = await response.json();

    return {
        props: {
            resort: resortMap[RESORT],
        },
    };
};
