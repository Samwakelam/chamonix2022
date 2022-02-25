import React, { useContext } from 'react';
import Link from 'next/link';

import { SpeedUnitContext } from '../../../../providers/speed-unit.provider';

import { LocationTypes } from '../../../../@types/resort-data.definition';
import { Button } from '../../../../components/button/button.component';
import { ButtonTypes } from '../../../../components/button/button.definition';
import { Heading, HeadingSizes } from '../../../../components/heading';
import { Icon } from '../../../../components/icon/icon.component';
import { Select } from '../../../../components/select/select.component';

import { mountainLeftButtons, resortLeftButtons } from '../navigation.data';
import { HomeNavigationProps } from './home-navigation.definition';

import * as S from './home-navigation.styles';
import { Toggle } from '../../../../components/toggle/toggle.component';

export const HomeNavigation = ({
    resortConfig,
    activeStates,
    handleClick,
    handleChange,
    handleLeftMountainClick,
    handleLeftResortClick,
}: HomeNavigationProps): React.ReactElement<HomeNavigationProps> => {
    const { setMPH, setKMH } = useContext(SpeedUnitContext);

    const { name, year, country } = resortConfig;
    const { activeLocation, activeLevel, activeWeather, dateOptions } = activeStates;

    const handleToggle = (item: boolean) => {
        switch (item) {
            case false:
                setMPH();
                break;
            case true:
                setKMH();
                break;
        }
    };

    return (
        <S.HomeNavigation>
            <S.TitleWrap>
                <Heading size={HeadingSizes.H1}>{name}</Heading>
                <Heading size={HeadingSizes.H2}>{year}</Heading>
                <Heading size={HeadingSizes.H2}>{country}</Heading>
            </S.TitleWrap>

            <S.RoundButtonWrap>
                <Button
                    round
                    buttonType={ButtonTypes.ICON}
                    data-active={activeLocation === LocationTypes.MOUNT}
                    data-location={LocationTypes.MOUNT}
                    onClick={(e) => handleClick(e)}
                >
                    <Icon icon={'mountain'} />
                </Button>
                <Button
                    round
                    buttonType={ButtonTypes.ICON}
                    data-active={activeLocation === LocationTypes.RESORT}
                    data-location={LocationTypes.RESORT}
                    onClick={(e) => handleClick(e)}
                >
                    <Icon icon={'city'} />
                </Button>

                <Link href="/maps" passHref>
                    <Button
                        round
                        buttonType={ButtonTypes.ICON}
                        data-active={false}
                        data-location={LocationTypes.RESORT}
                    >
                        <a>
                            <Icon icon={'map'} />
                        </a>
                    </Button>
                </Link>
            </S.RoundButtonWrap>

            <S.LeftButtonWrap>
                {activeLocation === LocationTypes.MOUNT &&
                    mountainLeftButtons.map(({ data, heading }, index) => (
                        <Button
                            data-active={activeLevel === data}
                            data-level={data}
                            round
                            buttonType={ButtonTypes.LEFT}
                            className="left"
                            onClick={(e) => handleLeftMountainClick(e)}
                            key={data + index}
                        >
                            <Heading size={HeadingSizes.H3}>{heading}</Heading>
                        </Button>
                    ))}
                {activeLocation === LocationTypes.RESORT &&
                    resortLeftButtons.map(({ data, heading }, index) => (
                        <Button
                            data-active={activeWeather === data}
                            data-weather={data}
                            round
                            buttonType={ButtonTypes.LEFT}
                            className="left"
                            onClick={(e) => handleLeftResortClick(e)}
                            key={data + index}
                        >
                            <Heading size={HeadingSizes.H3}>{heading}</Heading>
                        </Button>
                    ))}
            </S.LeftButtonWrap>

            <Select selectOptions={dateOptions} onChange={handleChange} />

            <S.ToggleWrap>
                <Heading size={HeadingSizes.H3}>MILES</Heading>
                <Toggle isToggleOn={handleToggle} />
                <Heading size={HeadingSizes.H3}>KM</Heading>
            </S.ToggleWrap>
        </S.HomeNavigation>
    );
};
