import styled, { css } from 'styled-components';

import { DataCard } from '../../weather-cards.styles';
import { shadow, theme } from '../../../../theme';

export const ResortDataCard = styled.article`
    ${DataCard}
    justify-content: flex-start;

    & > div {
        margin: 0 0 10rem 0;
    }
`;

export const HeadingWrap = styled.div`
    & h3 {
        margin: 3rem 0;
        font-size: 1rem;
        text-align: center;
    }

    background-image: linear-gradient(135deg, ${theme.c.purple.a}, ${theme.c.pink.b});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
