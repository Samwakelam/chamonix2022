import styled, { css } from 'styled-components';

import { theme, shadow } from '../../../../theme';
import { Icon as IconComponent } from '../../../icon/icon.component';
import { ColourGradientProps } from '../../weather-card.definitions';
import { DataCard } from '../../weather-cards.styles';

export const MountainDataCard = styled.article`
    ${DataCard}

    & h3 {
        margin: 3rem 0 1rem 0;
        font-size: 1rem;

        background-image: linear-gradient(135deg, ${theme.c.pink.a}, ${theme.c.pink.c});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & i:first-of-type {
        margin: 0 0 3rem 0;
        line-height: normal;
    }

    & > i:last-of-type {
        margin: 0 0 3rem 0;

        background-image: linear-gradient(135deg, ${theme.c.pink.a}, ${theme.c.pink.c});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const TwoIcon = styled.div<ColourGradientProps>`
    display: flex;
    gap: 1rem;

    background-image: linear-gradient(135deg, ${({ colour }) => colour.a}, ${({ colour }) => colour.b});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Icon = styled(IconComponent)<ColourGradientProps>`
    background-image: linear-gradient(135deg, ${({ colour }) => colour.a}, ${({ colour }) => colour.b});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const DateWrap = styled.div`
    display: flex;
    align-items: center;

    background-image: linear-gradient(135deg, ${theme.c.pink.a}, ${theme.c.pink.c});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    & h4 {
        margin: 0;
        font-size: 1rem;
    }

    && i,
    svg {
        align-self: center;
        margin: 0 1rem 0 0;
    }
`;
