import { theme } from './theme.object';

export const device = {
    mobile: `(min-width: ${theme.device.mobile}px)`,
    tablet: `(min-width: ${theme.device.tablet}px)`,
    laptopS: `(min-width: ${theme.device.laptopS}px)`,
    laptopL: `(min-width: ${theme.device.laptopL}px)`,
    desktopS: `(min-width: ${theme.device.desktopS}px)`,
    desktopL: `(min-width: ${theme.device.desktopL}px)`,
};
