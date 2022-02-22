import React, { createContext, useState } from 'react';

export enum SpeedUnitTypes {
    MPH = 'mph',
    KMH = 'kmh',
}

export type SpeedUnitContextProps = {
    speedUnit: SpeedUnitTypes;
    setMPH: () => void;
    setKMH: () => void;
};

export const SpeedUnitContext = createContext<SpeedUnitContextProps>({
    speedUnit: SpeedUnitTypes.MPH,
    setMPH: () => {},
    setKMH: () => {},
});

export const SpeedUnitProvider = ({ children }) => {
    const [speedUnit, setSpeedUnit] = useState<SpeedUnitTypes>(SpeedUnitTypes.MPH);

    const setMPH = (): void => {
        setSpeedUnit(SpeedUnitTypes.MPH);
    };

    const setKMH = (): void => {
        setSpeedUnit(SpeedUnitTypes.KMH);
    };

    return <SpeedUnitContext.Provider value={{ speedUnit, setMPH, setKMH }}>{children}</SpeedUnitContext.Provider>;
};
