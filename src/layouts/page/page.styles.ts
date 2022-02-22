import styled, { css } from 'styled-components';

export const Page = styled.div`
    position: relative;
    display: flex;

    @media (orientation: landscape) {
        flex-flow: column;

        & header {
            position: sticky;
            top: 0;
        }
    }
`;

export const Main = styled.main`
    display: flex;
    height: 100vh;
    flex: 1;
    overflow-x: hidden;
`;
