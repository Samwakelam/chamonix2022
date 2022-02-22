export type OptionProps = {
    title: string;
    value: string;
};

export type SelectProps = {
    className?: string;
    options: OptionProps[];
    onChange: (item: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type SelectStyledProps = {
    className?: string;
};
