import { useState } from "react";

import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";

const inputLimit = 10;

function symbolsLeft(length: number): string | null {
	if (length <= inputLimit) {
		return `Symbols left ${inputLimit - length}`;
	}

	return null;
};

const App = () => {
	const [inputText, setInputText] = useState('');
	const [inputLength, setInputLength] = useState(0);
	const [sum, setSum] = useState(0);

	const handleChange = (value: string) => {
		setInputLength(value.length);
		setInputText(value);
	};

	const handleClick = () => {
		setSum(prev => prev + Number(inputText));
	};

	return <div>
		<div>Summ is {sum}</div>
		<Input limit={inputLimit} onChange={handleChange} />
		<Button isDisabled={isNaN(+inputText)} onClick={handleClick} />
		<div>{symbolsLeft(inputLength)}</div>
		<div>{isNaN(+inputText) ? "You can summarize only number" : "Summarize it"}</div>
	</div>;
};

export { App };
