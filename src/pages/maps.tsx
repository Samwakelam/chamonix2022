import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { MainContainer } from '../layouts/main-container/main-container.component';
import { MapsLayout } from '../layouts/maps/maps.layout';
import { MapsNavigation } from '../layouts/maps/_partials/maps-navigation/maps-navigation.component';
import { NavigationContainer } from '../layouts/navigation-container/navigation-container.component';
import { MapData } from '../layouts/page/page.data';

import { Page } from '../layouts/page/page.layout';

const Maps = (): JSX.Element => {
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

