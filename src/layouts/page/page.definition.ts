import { ReactElement } from 'react';

// first child is the navigation, second child is the content
export type PageLayoutProps = {
    children: [ReactElement, ReactElement];
};
