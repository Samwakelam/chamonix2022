import styled from 'styled-components';
import { theme } from '../../theme';

import { ScrollerStyledProps } from './scroller.definition';

export const ScrollerContainer = styled.section`
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    max-width: 100%;
    width: 100%;

    &::-webkit-scrollbar {
        height: 1rem;
    }

    &::-webkit-scrollbar-track {
        background-color: ${theme.c.white.b};
        border-radius: 0.5rem;
        margin: 0 2.4rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${theme.c.grey.b};
        border-radius: 3rem;
    }
`;

export const Scroller = styled.section<ScrollerStyledProps>`
    display: flex;
    width: fit-content;
    gap: 1.2rem;
    margin: 4.8rem 0;
`;

export const Card = styled.div<{ cardWidth: string }>`
    min-width: ${({ cardWidth }) => cardWidth && cardWidth};
    height: 100%;

    &:first-of-type {
        margin-left: 2.4rem;
    }

    &:last-of-type {
        margin-right: 2.4rem;
    }
`;
