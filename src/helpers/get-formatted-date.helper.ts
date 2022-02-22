export const getFormattedDate = (date: string): string => {
    const createDateObject = new Date(`${date.split('/').reverse().join('-')}`);
    const formattedDate = createDateObject.toLocaleDateString('en-gb', {
        month: 'short',
        day: 'numeric',
    });
    return formattedDate;
};
