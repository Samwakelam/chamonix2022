import { ThemeConsumer } from 'styled-components';

import { theme } from '../src/theme/theme.object';

import '../public/css/weather-icons-wind.css';
import '../public/css/weather-icons.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'white',
        values: [
            {
                name: 'white',
                value: theme.c.white.b,
            },
            {
                name: 'black',
                value: theme.c.black.a,
            },
        ],
    },
};
