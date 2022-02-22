export const getSentenceCase = (item: string): string => {
    const kebabCaseTest = /-/;
    const camelCaseTest = /(?=[A-Z])/;

    if (kebabCaseTest.test(item)) {
        const array = item.toLowerCase().split('-');
        const string: string = array.join(' ');
        return string;
    }

    if (camelCaseTest.test(item)) {
        const array = item.split(/(?=[A-Z])/);
        const string: string = array.join(' ').toLowerCase();
        return string;
    }

    return item;
};
