import React, { useState } from "react";
import "./App.css";
const randomvalue = Math.floor(Math.random() * 20);
function App() {
	const [inputvalue, setInputvalue] = useState("Nothing Here");
	const [numberequal, setNumberequal] = useState(false);
	const [guesshighlowstring, setGuesshighlowstring] = useState("");
	let inputedNumber;
	let stringhighlow;
	function handleChange(event) {
		inputedNumber = event.target.value;
		console.log(inputedNumber);
		if (randomvalue < Number(inputedNumber)) {
			stringhighlow = "⬆️⬆️ Guess number is high";
		} else if (randomvalue > Number(inputedNumber)) {
			stringhighlow = "⬇️⬇️ Guess number is low";
		} else {
			stringhighlow = "You Win";
		}
	}
	function onSubmit() {
		setInputvalue(inputedNumber);
		setGuesshighlowstring(stringhighlow);
		if (Number(inputvalue) === randomvalue) {
			setNumberequal(true);
		} else {
			setNumberequal(false);
		}
	}
	const winbackcolor = { backgroundColor: "lightblue" };
	const orbackcolor = { backgroundColor: "lightgreen" };

	return (
		<div
			className="container-fluid"
			style={numberequal ? winbackcolor : orbackcolor}>
			<div className="row">
				<div className="col-12 fs-1 text-center mt-5"> Guess the number</div>
				<div className="col-12 text-center">
					<input
						type="number"
						style={{
							width: "10vw",
							height: "5vw",
							fontSize: "30px",
							marginTop: "5vw",
						}}
						onChange={handleChange}
						min="1"
						max="20"
					/>
					<br />
					<button className="btn btn-primary btn-lg mt-5" onClick={onSubmit}>
						Submit
					</button>
					<p className="fs-1 text-dark">Inputed number : {inputvalue}</p>
					<p className="fs-1">Random number : {randomvalue}</p>
					<p className="mt-5 fs-1">
						{" "}
						Is the number you input equal to guessed number
						<br />
					</p>
					<h1>{guesshighlowstring}</h1>
				</div>
			</div>
		</div>
	);
}

export default App;
