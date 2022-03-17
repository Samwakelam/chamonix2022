import React from 'react';
import { NavigationContainerProps } from './navigation-container.definition';

import * as S from './navigation-container.styles';

export const NavigationContainer = ({
    children,
    page,
    isOpen,
}: NavigationContainerProps): React.ReactElement<NavigationContainerProps> => {
    return (
        <S.NavigationContainer page={page} isOpen={isOpen}>
            {children}
        </S.NavigationContainer>
    );
};
