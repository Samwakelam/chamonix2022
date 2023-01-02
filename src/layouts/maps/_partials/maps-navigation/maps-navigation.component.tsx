import React, { useMemo } from 'react';
import Link from 'next/link';

import { Button } from '../../../../components/button/button.component';
import { ButtonTypes } from '../../../../components/button/button.definition';
import { Icon } from '../../../../components/icon/icon.component';
import { Heading, HeadingSizes } from '../../../../components/heading';

import { MapDataProps } from '../../../../maps/resort.map';

import * as S from './maps-navigation.styles';

export const MapsNavigation = ({
    handleMapSelect,
    mapsConfig,
    activeMap,
}: {
    handleMapSelect: (activeMap: string) => void;
    mapsConfig: MapDataProps[];
    activeMap: string;
}) => {
    const activeHeading = useMemo(() => {
        return mapsConfig.filter((map) => map.label === activeMap)[0].title;
    }, [activeMap]);

    return (
        <S.MapsNavigation>
            <Button round buttonType={ButtonTypes.ICON}>
                <Link href="/" passHref>
                    <a>
                        <Icon icon={'chevron-back'} />
                    </a>
                </Link>
            </Button>
            <Heading size={HeadingSizes.H1}>{activeHeading}</Heading>
            {mapsConfig.length > 1 &&
                mapsConfig.map(({ label }, index) => {
                    return (
                        <Button
                            round
                            buttonType={ButtonTypes.ICON}
                            className="map-index"
                            data-active={activeMap === label}
                            onClick={(e) => handleMapSelect(label)}
                            key={label}
                        >
                            <Heading size={HeadingSizes.H4}>{index}</Heading>
                        </Button>
                    );
                })}
        </S.MapsNavigation>
    );
};
