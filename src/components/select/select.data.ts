import { SelectProps } from './select.definition';

export const SelectData: Omit<SelectProps, 'onChange'> = {
    options: [
        { value: '21/02/2022', title: '21 Feb' },
        { value: '22/02/2022', title: '22 Feb' },
        { value: '23/02/2022', title: '23 Feb' },
        { value: '24/02/2022', title: '24 Feb' },
        { value: '25/02/2022', title: '25 Feb' },
        { value: '26/02/2022', title: '26 Feb' },
        { value: '27/02/2022', title: '27 Feb' },
    ],
};
