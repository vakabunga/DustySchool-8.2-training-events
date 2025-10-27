import { useState, type FC } from "react";
import { cnEmoji } from "./Emoji.classname";

import './Emoji.css';

const emojiesList = ['😭', '😢', '☹️', '😟', '😑', '🙂', '☺️', '😄', '😅', '😃', '😆', '😂', '🤣', '💥'];
const lastEmojiIndex = emojiesList.length - 1;

const Emoji: FC<unknown> = () => {
    const [emoji, setEmoji] = useState(0);

    function handleClick() {
        setEmoji(prev => prev === lastEmojiIndex ? prev : prev + 1);
    }

    return <div className={cnEmoji()} onClick={handleClick}>{emojiesList[emoji]}</div>
}

export { Emoji };
