import styled, { css } from 'styled-components';
import { device } from '../../theme/device.object';

export const Page = styled.div`
    position: relative;
    display: flex;

    @media (orientation: landscape) {
        flex-flow: column;

        & nav {
            position: sticky;
            top: 0;
        }
    }

    @media ${device.laptopL} {
        flex-flow: row;
    }
`;

export const Main = styled.main`
    display: flex;
    height: 100vh;
    flex: 1;
    overflow-x: hidden;
`;
