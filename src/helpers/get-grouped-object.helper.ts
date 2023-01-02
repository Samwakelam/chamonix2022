export const getGroupedObject = (arr: any[], key: string) => {
    return arr.reduce((prev, cur) => {
        (prev[cur[key]] = prev[cur[key]] || []).push(cur);
        return prev;
    }, {});
};
