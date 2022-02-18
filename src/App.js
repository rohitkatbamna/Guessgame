import React, { useState } from "react";
import "./App.css";

function App() {
	const [inputvalue, setInputvalue] = useState(NaN);
	const [numberequal, setNumberequal] = useState(false);
	const [randomvalue, setRandomvalue] = useState(0);
	let inputedNumber;
	function handleChange(event) {
		inputedNumber = event.target.value;
		setInputvalue(inputedNumber);
	}
	function onSubmit() {
		setRandomvalue(Math.floor(Math.random() * 2));

		if (Number(inputvalue) === randomvalue) {
			setNumberequal(true);
		} else {
			setNumberequal(false);
		}
	}

	return (
		<div className="container-fluid">
			<div className="row">
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
					<h1>{numberequal ? "yes it is" : "No it not"}</h1>
				</div>
			</div>
		</div>
	);
}

export default App;
