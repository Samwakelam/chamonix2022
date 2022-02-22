import React from 'react';

import { ScrollerProps } from './scroller.definition';

import * as S from './scroller.styles';

export const Scroller = ({ className, children, cardWidth }: ScrollerProps): React.ReactElement<ScrollerProps> => {
    return (
        <S.ScrollerContainer>
            <S.Scroller className={className}>
                {children.map((card, index) => {
                    return (
                        <S.Card key={`scroller-card-${index}`} cardWidth={cardWidth}>
                            {card}
                        </S.Card>
                    );
                })}
            </S.Scroller>
        </S.ScrollerContainer>
    );
};
