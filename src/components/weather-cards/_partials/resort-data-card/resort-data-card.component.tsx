import React, { useEffect, useRef, useState } from 'react';
import { SpeedUnitTypes } from '../../../../providers/speed-unit.provider';
import { Button } from '../../../button/button.component';
import { ButtonTypes } from '../../../button/button.definition';

import { Heading, HeadingSizes } from '../../../heading';
import { Icon } from '../../../icon/icon.component';
import { buttonData } from './resort-data-card.data';

import { ResortButtonDataProps, ResortDataCardProps } from './resort-data-card.definition';

import * as S from './resort-data-card.styles';
import * as WS from '../../weather-cards.styles';
import { getClockTime } from '../../../../helpers/get-clock-time.helper';
import { getFormattedDate } from '../../../../helpers/get-formatted-date.helper';

export const ResortDataCard = ({
    className,
    weatherConfig,
    units,
}: ResortDataCardProps): React.ReactElement<ResortDataCardProps> => {
    if (!weatherConfig) return null;

    const card = useRef<HTMLElement>(null);
    const [cardWidth, setCardWidth] = useState<number>(0);

    const { weatherGroup, weatherConfig: weatherDetails } = weatherConfig;
    const {
        base,
        date,
        time,
        hum_pct,
        frzglvl_m,
        totalcloud_pct,
        lowcloud_pct,
        midcloud_pct,
        highcloud_pct,
        precip_mm,
        rain_mm,
        snow_mm,
        vis_km: visibilityKM,
        vis_mi: visibilityMi,
    } = weatherDetails;

    useEffect(() => {
        if (card) {
            setCardWidth(card.current.offsetWidth);
        }
    }, [card]);

    return (
        <S.ResortDataCard className={className} ref={card}>
            <S.HeadingWrap>
                <Heading size={HeadingSizes.H3}>{getFormattedDate(date)}</Heading>
                <Icon icon={getClockTime(date, time)} size={6} />
            </S.HeadingWrap>

            <WS.ButtonWrap>
                {buttonData[weatherGroup].map(({ icon, title, key }: ResortButtonDataProps) => {
                    let buttonValue;
                    switch (key) {
                        case 'temp':
                            buttonValue = base.temp_c;
                            break;
                        case 'feelsLike':
                            buttonValue = base.feelslike_c;
                            break;
                        case 'visibility':
                            buttonValue = units === SpeedUnitTypes.MPH ? visibilityMi : visibilityKM;
                            break;
                        default:
                            buttonValue = weatherDetails[key];
                    }

                    return (
                        <React.Fragment key={`resort-data-card-${title + key}`}>
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
        </S.ResortDataCard>
    );
};
