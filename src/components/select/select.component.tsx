import React from 'react';
import { SelectProps } from './select.definition';

import * as S from './select.styles';

export const Select = ({ className, options, onChange }: SelectProps): React.ReactElement<SelectProps> => {
    return (
        <S.Select onChange={(e) => onChange(e)}>
            {options.map(({ title, value }, index) => (
                <option value={value} key={value + index}>
                    {title}
                </option>
            ))}
        </S.Select>
    );
};
