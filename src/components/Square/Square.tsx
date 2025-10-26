import { useState, type FC } from "react";

import { cnSquare } from "./Square.classname";

import './Square.css';

const Square: FC<unknown> = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div className={cnSquare('', {state: clicked ? 'moved' : 'normal'})} onClick={handleClick}>
            {clicked ? "make me blue" : "make me red"}
        </div>
    );
};

export { Square };
