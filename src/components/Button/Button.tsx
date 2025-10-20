import type { FC } from "react";

import { cnButton } from "./Button.classname";

type ButtonProps = {
    isDisabled: boolean;
    onClick: () => void;
};

const Button: FC<ButtonProps> = ({ isDisabled, onClick }) => {
    function handleClick () {
        onClick();
    };

    return <button className={cnButton()} disabled={isDisabled} onClick={handleClick}>Summarize it</button>
};

export { Button };
