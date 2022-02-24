import React, { useEffect, useRef, useState } from 'react';

import { SpeedUnitTypes } from '../../../../providers/speed-unit.provider';

import { getCamelCase } from '../../../../helpers/get-camel-case.helper';
import { getSentenceCase } from '../../../../helpers/get-sentence-case.helper';
import { getClockTime } from '../../../../helpers/get-clock-time.helper';
import { getFormattedDate } from '../../../../helpers/get-formatted-date.helper';

import { Button } from '../../../button/button.component';
import { ButtonTypes } from '../../../button/button.definition';
import { Heading, HeadingSizes } from '../../../heading';
import { Icon } from '../../../icon/icon.component';
import { buttonData } from './mountain-data-card.data';

import { MountainButtonDataProps, MountainDataCardProps } from './mountain-data-card.definition';

import * as S from './mountain-data-card.styles';
import * as WS from '../../weather-cards.styles';
import { theme } from '../../../../theme';

const severity = ['freezing', 'iso', 'heavy', 'mod', 'occ'];

export const MountainDataCard = ({
    className,
    weatherConfig,
    date,
    time,
    units = SpeedUnitTypes.MPH,
}: MountainDataCardProps): React.ReactElement<MountainDataCardProps> => {
    if (!weatherConfig) return null;

    const card = useRef<HTMLElement>(null);
    const [cardWidth, setCardWidth] = useState<number>(0);

    const {
        windgst_mph: windGustMPH,
        windgst_kmh: windGustKMH,
        windspd_mph: windSpeedMPH,
        windspd_kmh: windSpeedKMH,
        winddir_compass: windDirection,
        wx_desc: description,
        wx_icon: icon,
    } = weatherConfig;

    useEffect(() => {
        if (card) {
            setCardWidth(card.current.offsetWidth);
        }
    }, [card]);

    const createIconSet = (icon) => {
        const iconSeverity = getSentenceCase(icon.replace('.gif', '')).split(' ')[0];
        const arr = getSentenceCase(icon.replace('.gif', '')).split(' ');
        arr.shift();
        const newGifID = getCamelCase(arr.join('-'));

        if (severity.includes(iconSeverity)) {
            switch (getSentenceCase(icon.replace('.gif', '')).split(' ')[0]) {
                case 'freezing':
                    return (
                        <S.TwoIcon colour={{ a: theme.c.orange.c, b: theme.c.blue.b }}>
                            <S.Icon colour={{ a: theme.c.purple.a, b: theme.c.aqua.a }} icon="freezing" size={3} />
                            <S.Icon colour={{ a: theme.c.orange.c, b: theme.c.blue.b }} icon={newGifID} size={3} />
                        </S.TwoIcon>
                    );
                    break;
                case 'iso':
                    return <S.Icon colour={{ a: theme.c.purple.a, b: theme.c.pink.a }} icon={newGifID} size={6} />;
                    break;
                case 'heavy':
                    return <S.Icon colour={{ a: theme.c.blue.b, b: theme.c.blue.c }} icon={newGifID} size={6} />;
                    break;
                case 'mod':
                    return <S.Icon colour={{ a: theme.c.purple.b, b: theme.c.blue.b }} icon={newGifID} size={6} />;
                    break;
                case 'occ':
                    return (
                        <S.Icon
                            colour={{ a: theme.c.purple.a, b: theme.c.pink.a }}
                            icon={getCamelCase(icon.replace('.gif', ''))}
                            size={6}
                        />
                    );
                    break;
            }
        } else {
            return (
                <S.Icon
                    colour={{ a: theme.c.aqua.a, b: theme.c.blue.b }}
                    icon={getCamelCase(icon.replace('.gif', ''))}
                    size={6}
                />
            );
        }
    };

    return (
        <S.MountainDataCard className={className} ref={card}>
            <Heading size={HeadingSizes.H3}>{description}</Heading>
            <S.DateWrap>
                <Icon icon={getClockTime(date, time)} size={2} />
                <Heading size={HeadingSizes.H4}>{getFormattedDate(date)}</Heading>
            </S.DateWrap>

            {createIconSet(icon)}

            <WS.ButtonWrap>
                {buttonData.map(({ icon, title, key }: MountainButtonDataProps) => {
                    let buttonValue;
                    switch (key) {
                        case 'windSpeed':
                            buttonValue = units === SpeedUnitTypes.MPH ? windSpeedMPH : windSpeedKMH;
                            break;
                        case 'windGust':
                            buttonValue = units === SpeedUnitTypes.MPH ? windGustMPH : windGustKMH;
                            break;
                        default:
                            buttonValue = weatherConfig[key];
                    }

                    return (
                        <React.Fragment key={`mountain-data-card-${title + key}`}>
                            <Button buttonType={ButtonTypes.LEFT} className="left" round data-display={cardWidth > 175}>
                                <Icon icon={icon} />
                                <span>{title}</span>
                            </Button>
                            <Button buttonType={ButtonTypes.SECONDARY} round>
                                {buttonValue}
                            </Button>
                        </React.Fragment>
                    );
                })}
            </WS.ButtonWrap>

            <Icon icon={windDirection.toLowerCase()} size={6} />
        </S.MountainDataCard>
    );
};
