export const getClockTime = (date: string, time: string): string =>
    new Date(`${date.split('/').reverse().join('-')}T${time}:00.000`).getHours().toString();
