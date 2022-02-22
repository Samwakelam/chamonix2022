import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { SpeedUnitProvider } from '../providers/speed-unit.provider';

import { theme } from '../theme';
import { GlobalStyle } from '../styles/global.style';
import { IconStyle } from '../styles/icon.style';
import { WindStyle } from '../styles/wind.style';

import '../../public/css/weather-icons-wind.css';
import '../../public/css/weather-icons.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <SpeedUnitProvider>
                <GlobalStyle />
                <IconStyle />
                <WindStyle />
                <Head>
                    <title>Chamonix 2022</title>
                </Head>
                <Component {...pageProps} />
            </SpeedUnitProvider>
        </ThemeProvider>
    );
}

export default App;
