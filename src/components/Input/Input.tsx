import { useState, type ChangeEvent, type FC } from "react";

import { cnInput } from "./Input.classname";

type InputProps = {
    limit: number;
    onChange: (value: string) => void;
};

const Input: FC<InputProps> = ({ limit, onChange }) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        onChange(inputValue);
        setInputText(inputValue);
    };

    return <input
        className={cnInput()}
        value={inputText}
        onChange={handleChange}
        maxLength={limit}>
    </input>
};

export { Input };
