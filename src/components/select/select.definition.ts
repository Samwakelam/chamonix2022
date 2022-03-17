export type SelectOptionProps = {
    title: string;
    value: string;
};

export type SelectProps = {
    className?: string;
    selectOptions: SelectOptionProps[];
    onChange: (item: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type SelectStyledProps = {
    className?: string;
};
