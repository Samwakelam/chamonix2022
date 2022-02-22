import React from 'react';

import { ButtonProps, ButtonTypes } from './button.definition';

import * as S from './button.styles';

export const Button = ({
    className,
    buttonType = ButtonTypes.PRIMARY,
    round,
    children,
    ...props
}: ButtonProps): React.ReactElement<ButtonProps> => {
    return (
        <S.Button className={className} buttonType={buttonType} round={round} {...props}>
            {children}
        </S.Button>
    );
};
