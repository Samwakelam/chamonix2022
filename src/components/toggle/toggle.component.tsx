import React, { useEffect, useRef, useState } from 'react';

import { ToggleProps } from './toggle.definition';

import * as S from './toggle.styles';

export const Toggle = ({ className, isToggleOn }: ToggleProps): React.ReactElement<ToggleProps> => {
    const span = useRef<HTMLElement>(null);

    const [isActive, setIsActive] = useState<boolean>(false);
    const [toggleWidth, setToggleWidth] = useState<number>(0);
    const [toggleHeight, setToggleHeight] = useState<number>(0);

    const onToggle = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();

        setIsActive(isActive ? false : true);
    };

    useEffect(() => {
        isToggleOn(isActive);
    }, [isActive]);

    useEffect(() => {
        setToggleHeight(span.current.offsetHeight);
        setToggleWidth(span.current.offsetWidth);
    }, []);

    return (
        <S.ToggleContainer>
            <S.Toggle className={className} onClick={onToggle}>
                <S.Span data-active={isActive} ref={span} width={toggleWidth} height={toggleHeight}></S.Span>
            </S.Toggle>
        </S.ToggleContainer>
    );
};
