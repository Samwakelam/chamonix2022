import { ReactElement } from 'react';

export type NavigationContainerProps = {
    children: ReactElement;
    page: string;
    isOpen: boolean;
};

export type NavigationContainerStyledProps = {
    page: string;
    isOpen: boolean;
};
