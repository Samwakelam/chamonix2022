import { ImageFitType, ImageProps } from '../components/image/image.definition';

export type MapDataProps = {
    title: string;
    label: string;
    image: ImageProps;
};

export type ResortProps = {
    id: number;
    name: string;
    maps: MapDataProps[];
};

export type Resort = {
    [key: string]: ResortProps;
};

export const resort: Resort = {
    chamonix: {
        id: 333003,
        name: 'chamonix',
        maps: [
            {
                title: 'Chamonix Mont Blanc',
                label: 'chamonix-mont-blanc',
                image: {
                    mobile: '/maps/chamonix-mont-blanc.png',
                    alt: 'Chamonix Mont Blanc Map',
                    fit: ImageFitType.CONTAIN,
                },
            },
            {
                title: 'Argentiere',
                label: 'argentiere',
                image: {
                    mobile: '/maps/argentiere.png',
                    alt: 'argentiere map',
                    fit: ImageFitType.CONTAIN,
                },
            },
            {
                title: 'Arguille du Midi',
                label: 'arguille-du-midi',
                image: {
                    mobile: '/maps/arguille-du-midi.png',
                    alt: 'arguille du midi map',
                    fit: ImageFitType.CONTAIN,
                },
            },
            {
                title: 'Balme',
                label: 'balme',
                image: {
                    mobile: '/maps/balme.png',
                    alt: 'balme map',
                    fit: ImageFitType.CONTAIN,
                },
            },
            {
                title: 'Brevent and Flegere',
                label: 'brevent-flegere',
                image: {
                    mobile: '/maps/brevent-flegere.png',
                    alt: 'brevent and flegere map',
                    fit: ImageFitType.CONTAIN,
                },
            },
            {
                title: 'Le Petit Chamonix',
                label: 'le-petit-chamonix',
                image: {
                    mobile: '/maps/le-petit-chamonix.png',
                    alt: 'Le Petit Chamonix Map',
                    fit: ImageFitType.CONTAIN,
                },
            },
            {
                title: 'Les Houches',
                label: 'les-houches',
                image: {
                    mobile: '/maps/les-houches.png',
                    alt: 'Les Houches Map',
                    fit: ImageFitType.CONTAIN,
                },
            },
        ],
    },
    tignes: {
        id: 333018,
        name: 'tignes',
        maps: [
            {
                title: 'Espace Killy',
                label: 'espace-killy',
                image: {
                    mobile: '/maps/tignes.png',
                    alt: 'Espace Killy Map',
                    fit: ImageFitType.CONTAIN,
                },
            },
        ],
    },
};
