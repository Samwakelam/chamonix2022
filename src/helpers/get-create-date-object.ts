export const getCreateDate = (date: string, time?: string): Date => {
    if (time) new Date(`${date.split('/').reverse().join('-')}T${time}:00.000`);

    return new Date(date.split('/').reverse().join('-'));
};
