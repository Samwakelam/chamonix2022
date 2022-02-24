import styled from 'styled-components';
import { getGradientTextClip } from '../../../../helpers/get-gradient-text-clip.helper';

import { theme } from '../../../../theme';
import { Icon as IconComponent } from '../../../icon/icon.component';

import { ColourGradientProps } from '../../weather-card.definitions';
import { DataCard } from '../../weather-cards.styles';

export const MountainDataCard = styled.article`
    ${DataCard}

    & h3 {
        margin: 3rem 0 1rem 0;
        font-size: 1rem;

        ${getGradientTextClip(135, theme.c.pink.a, theme.c.pink.c)}
    }

    & i:first-of-type {
        margin: 0 0 3rem 0;
        line-height: normal;
    }

    & > i:last-of-type {
        margin: 0 0 3rem 0;

        ${getGradientTextClip(135, theme.c.pink.a, theme.c.pink.c)}
    }
`;

export const TwoIcon = styled.div<ColourGradientProps>`
    display: flex;
    gap: 1rem;

    ${({ colour }) => getGradientTextClip(135, colour.a, colour.b)}
`;

export const Icon = styled(IconComponent)<ColourGradientProps>`
    ${({ colour }) => getGradientTextClip(135, colour.a, colour.b)}
`;

export const DateWrap = styled.div`
    display: flex;
    align-items: center;

    ${getGradientTextClip(135, theme.c.pink.a, theme.c.pink.c)}

    & h4 {
        margin: 0;
        font-size: 1rem;
    }

    && i,
    svg {
        align-self: center;
        margin: 0 1rem 0 0;
        height: 100%;
    }
`;
