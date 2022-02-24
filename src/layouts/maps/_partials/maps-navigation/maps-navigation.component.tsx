import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { Button } from '../../../../components/button/button.component';
import { ButtonTypes } from '../../../../components/button/button.definition';
import { Icon } from '../../../../components/icon/icon.component';
import { Heading, HeadingSizes } from '../../../../components/heading';

import { MapData } from '../../../page/page.data';

import * as S from './maps-navigation.styles';

export const MapsNavigation = ({ handleMapSelect }) => {
    const [activeMap, setActiveMap] = useState<string>(MapData[0].label);
    const [activeHeading, setActiveHeading] = useState<string>('');

    const handleClick = (event, map) => {
        event.preventDefault();
        event.stopPropagation();

        setActiveMap(map);
    };

    useEffect(() => {
        const mapObject = MapData.filter((map) => {
            return map.label === activeMap;
        });
        setActiveHeading(mapObject[0].title);
        handleMapSelect(activeMap);
    }, [activeMap]);

    return (
        <S.MapsNavigation>
            <Link href="/" passHref>
                <Button round buttonType={ButtonTypes.ICON}>
                    <a>
                        <Icon icon={'chevron-back'} />
                    </a>
                </Button>
            </Link>
            <Heading size={HeadingSizes.H1}>{activeHeading}</Heading>
            {MapData.map(({ label }, index) => {
                return (
                    <Button
                        round
                        buttonType={ButtonTypes.ICON}
                        className="map-index"
                        data-active={activeMap === label}
                        onClick={(e) => handleClick(e, label)}
                        key={label}
                    >
                        <Heading size={HeadingSizes.H4}>{index}</Heading>
                    </Button>
                );
            })}
        </S.MapsNavigation>
    );
};
