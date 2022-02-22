export type CompassIcons =
    | 'n'
    | 'nne'
    | 'ne'
    | 'ene'
    | 'e'
    | 'ese'
    | 'se'
    | 'sse'
    | 's'
    | 'ssw'
    | 'sw'
    | 'wsw'
    | 'w'
    | 'wnw'
    | 'nw'
    | 'nnw';

export type CompassIconMapProps = {
    [key in CompassIcons]: string;
};
