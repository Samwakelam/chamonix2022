import React from 'react';
import { MockThreeDays } from '../../__mocks__/mock-three-days.data';

import { MockThreeHours } from '../../__mocks__/mock-three-hours.data';
import { ResortDataProps } from '../@types/resort-data.definition';

import { Page } from '../layouts/page/page.layout';

type IndexPageProps = {
    resortData: ResortDataProps;
};

const Index = ({ resortData }: IndexPageProps): JSX.Element => {
    return <Page pageData={resortData} />;
};

export default Index;

export const getStaticProps = async (): Promise<{ props: { resortData: ResortDataProps } }> => {
    const APP_ID = process.env.WU_APP_ID;
    const APP_KEY = process.env.WU_KEY;

    const response = await fetch(
        `https://api.weatherunlocked.com/api/resortforecast/333003?app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const resortData = await response.json();

    return {
        props: {
            resortData: resortData as ResortDataProps,
        },
    };
};
