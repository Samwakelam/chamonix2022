export const getKebabCase = (item: string): string => {
    const array = item.toLowerCase().split(' ');

    const string: string = array.join('-');

    return string;
};
