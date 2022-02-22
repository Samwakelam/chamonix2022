export const getCamelCase = (item: string): string => {
    const kebabCaseTest = /-/;
    const camelCaseTest = /(?=[A-Z])/;
    const pascalCaseTest = /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/;

    let array = [];
    if (kebabCaseTest.test(item)) {
        array = item.split('-');
    } else if (pascalCaseTest.test(item)) {
        array = item.split(/(?=[A-Z])/);
    } else if (camelCaseTest.test(item)) {
        array = item.split(/(?=[A-Z])/);
    } else {
        array = item.split(' ');
    }

    const firstWord = array[0].toLowerCase();
    array[0] = firstWord;

    for (let i = 1; i < array.length; i += 1) {
        const word = array[i].toLowerCase();
        const splitWord = word.split('');

        splitWord[0] = splitWord[0].toUpperCase();

        const newWord = splitWord.join('');
        array[i] = newWord;
    }

    const string: string = array.join('');

    return string;
};
