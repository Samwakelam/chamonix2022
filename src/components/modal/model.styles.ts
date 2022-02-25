import styled from 'styled-components';
import { rgba } from 'polished';

import { theme } from '../../theme';

export const ModelBackdrop = styled.div`
    background-color: ${rgba(theme.c.grey.c, 0.8)};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    display: flex;

    & > button {
        position: absolute;
        bottom: 3rem;
        right: 3rem;

        & svg {
            height: 100%;

            & path {
                fill: ${theme.c.purple.b};
            }
        }
    }
`;

export const Model = styled.div`
    margin: auto;
    width: fit-content;
    height: fit-content;
`;
