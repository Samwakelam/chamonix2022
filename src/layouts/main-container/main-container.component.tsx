import React, { ReactElement } from 'react';
import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    height: 100vh;
    flex: 1;
    overflow-x: hidden;
`;

export const MainContainer = ({ children }: { children: ReactElement | ReactElement[] }): React.ReactElement => {
    return <Main>{children}</Main>;
};
