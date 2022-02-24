import React, { ReactElement, ReactNode } from 'react';

export enum ButtonTypes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    LEFT = 'left',
    ICON = 'icon',
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    buttonType?: ButtonTypes;
    round?: boolean;
    children: ReactNode;
}

export type ButtonStyledProps = {
    className?: string;
    buttonType: ButtonTypes;
    round: boolean;
};
