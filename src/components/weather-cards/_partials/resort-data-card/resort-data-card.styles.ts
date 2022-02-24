import styled, { css } from 'styled-components';

import { DataCard } from '../../weather-cards.styles';
import { theme } from '../../../../theme';
import { getGradientTextClip } from '../../../../helpers/get-gradient-text-clip.helper';

export const ResortDataCard = styled.article`
    ${DataCard}
    justify-content: flex-start;

    & > div {
        margin: 0 0 10rem 0;
    }

    @media (orientation: landscape) {
        & > div {
            margin: 0 0 5rem 0;
        }
    }
`;

export const HeadingWrap = styled.div`
    & h3 {
        margin: 3rem 0;
        font-size: 1rem;
        text-align: center;
    }

    ${getGradientTextClip(135, theme.c.purple.a, theme.c.pink.b)}
`;
