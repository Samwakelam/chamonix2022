import { css, FlattenSimpleInterpolation } from 'styled-components';

export const getGradientTextClip = (angle: number, colourA: string, colourB: string): FlattenSimpleInterpolation => {
    return css`
        background-image: linear-gradient(${angle}deg, ${colourA}, ${colourB});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `;
};
