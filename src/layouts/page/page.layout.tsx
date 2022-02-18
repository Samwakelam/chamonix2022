import React from 'react';

import { PageLayoutProps } from './page.definition';

export const Page = ({ className }: PageLayoutProps): JSX.Element => {
    return (
        <>
            <h1>PageLayout</h1>
            <div id="wf-weatherfeed">
                <iframe
                    style={{ overflow: 'hidden', border: 'none' }}
                    allowTransparency={true}
                    height="272"
                    width="469"
                    src="//www.snow-forecast.com/resorts/Chamonix/forecasts/feed/mid/m"
                    scrolling="no"
                    frameBorder={0}
                    marginWidth={0}
                    marginHeight={0}
                >
                    <p>Your browser does not support iframes.</p>
                </iframe>
                <div id="wf-link">
                    <a href="https://www.snow-forecast.com/">
                        <img
                            alt="Snow Forecast"
                            src="//www.snow-forecast.com/images/feed/snowlogo-150.png"
                            width="150"
                            height="40"
                        />
                    </a>
                    <p id="cmt">
                        View detailed snow forecast for
                        <a href="https://www.snow-forecast.com/resorts/Chamonix/6day/mid">Chamonix</a> at:
                        <br />
                        <a href="https://www.snow-forecast.com/">
                            <strong>snow-forecast.com</strong>
                        </a>
                    </p>
                    <div style={{ clear: 'both' }}></div>
                </div>
            </div>
        </>
    );
};
