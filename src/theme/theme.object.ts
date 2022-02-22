// import rgba from 'styled-components';
import { rgba } from 'polished';

export const theme = {
    c: {
        white: {
            a: '#FFFFFF',
            b: '#EFF2F9',
        },
        black: {
            a: '#000000',
        },
        grey: {
            a: '#E4EBF1',
            b: '#B5BFC6',
            c: '#6E7F8D',
        },
        shadow: {
            a: rgba('#FAFBFF', 1),
            b: rgba('#161B1D', 0.23),
        },
        blue: {
            a: '#6EE2F5',
            b: '#3499FF',
            c: '#0D015B',
        },
        aqua: {
            a: '#42E695',
            b: '#3BB2B8',
            c: '#276174',
        },
        pink: {
            a: '#FDCAF1',
            b: '#FF005E',
            c: '#BC0056',
        },
        orange: {
            a: '#FFCFA5',
            b: '#FFA62E',
            c: '#EA4D2C',
        },
        purple: {
            a: '#DDE0FA',
            b: '#C671F4',
            c: '#730062',
        },
    },
    f: {
        lato: 'Lato, sans-serif',
    },
    device: {
        desktopL: 1920,
        desktopS: 1440,
        laptopL: 1200,
        laptopS: 1024,
        tablet: 768,
        mobile: 500,
    },
};
