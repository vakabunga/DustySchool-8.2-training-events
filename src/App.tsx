import { useState } from "react";

import { Input } from "./components/Input/Input";

const inputLimit = 10;

function symbolsLeft(length: number) {
	if (length <= inputLimit) {
		return `Symbols left ${inputLimit - length}`;
	}
}

const App = () => {
	const [inputText, setInputText] = useState('');
	const [inputLength, setInputLength] = useState(0);

	const handleChange = (value: string) => {
		setInputLength(value.length);
		setInputText(value);
	}


	return <div>
		<Input limit={inputLimit} onChange={handleChange} />
		<div>{symbolsLeft(inputLength)}</div>
		<div>{isNaN(+inputText) ? "You can summarize only number" : "Summarize it"}</div>
	</div>;
};

export { App };
