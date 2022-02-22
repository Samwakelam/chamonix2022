import React, { useEffect } from 'react';
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
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/service-worker.js').then(
                    function (registration) {
                        console.log('Service Worker registration successful with scope: ', registration.scope);
                    },
                    function (err) {
                        console.log('Service Worker registration failed: ', err);
                    }
                );
            });
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <SpeedUnitProvider>
                <GlobalStyle />
                <IconStyle />
                <WindStyle />
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <title>Chamonix 2022</title>
                    <meta name="theme-color" content="#a9c09a" />
                </Head>
                <Component {...pageProps} />
            </SpeedUnitProvider>
        </ThemeProvider>
    );
}

export default App;
