import { useState } from "react";

import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import { Square } from "./components/Square/Square";
import { cnApp } from "./App.classname";

import "./App.css";

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

	return <div className={cnApp()}>
		<div className={cnApp('summ')}>Summ is {sum}</div>
		<Input limit={inputLimit} onChange={handleChange} />
		<Button isDisabled={isNaN(+inputText)} onClick={handleClick} />
		<div className={cnApp('symbolsLeft')}>{symbolsLeft(inputLength)}</div>
		<div className={cnApp('error')}>{isNaN(+inputText) ? "You can summarize only number" : "Summarize it"}</div>
		<Square />
	</div>;
};

export { App };
