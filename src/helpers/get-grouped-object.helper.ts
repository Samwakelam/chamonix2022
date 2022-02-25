import { ForecastDataProps } from '../@types/resort-data.definition';

export const getGroupedObject = (arr: any[], key: string): { [keyof: string]: ForecastDataProps[] } => {
    if (arr.length > 0) {
        return arr.reduce((prev, cur) => {
            (prev[cur[key]] = prev[cur[key]] || []).push(cur);
            return prev;
        }, {});
    }
};
