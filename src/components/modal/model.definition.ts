import { ReactElement, MouseEvent } from 'react';

export type ModelProps = {
    children: ReactElement;
    handleClose: (event: MouseEvent) => void;
};

export type ModelStyledProps = {};
