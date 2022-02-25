import React from 'react';

import { Button } from '../button/button.component';
import { ButtonTypes } from '../button/button.definition';
import { Icon } from '../icon/icon.component';

import { ModelProps } from './model.definition';

import * as S from './model.styles';

export const Model = ({ children, handleClose }: ModelProps): React.ReactElement<ModelProps> => {
    return (
        <S.ModelBackdrop>
            <Button buttonType={ButtonTypes.ICON} onClick={handleClose}>
                <Icon icon="x" size={6} />
            </Button>
            <S.Model>{children}</S.Model>
        </S.ModelBackdrop>
    );
};
