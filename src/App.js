import React, { useState } from "react";
import "./App.css";
let randomvalue = Math.floor(Math.random() * 20);
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
			stringhighlow = "⬆️⬆️ Guessed number is high";
		} else if (randomvalue > Number(inputedNumber)) {
			stringhighlow = "⬇️⬇️ Guessed number is low";
		} else {
			stringhighlow = (
				<>
					<p className="fs-1">You Win</p>
					<button className="btn btn-primary btn-lg" onClick={handleReset}>
						Play Again
					</button>
				</>
			);
		}
	}
	function handleReset() {
		randomvalue = Math.floor(Math.random() * 20);
		setNumberequal(false);
		setInputvalue("");
		guesshighlowstring("");
	}
	function onSubmit() {
		setInputvalue(inputedNumber);
		setGuesshighlowstring(stringhighlow);
		if (Number(inputedNumber) === randomvalue) {
			setNumberequal(true);
		} else {
			setNumberequal(false);
		}
	}
	const winbackcolor = {
		backgroundColor: "lightblue",
		backgroundSize: "cover",
	};
	const orbackcolor = {
		backgroundColor: "lightgreen",
		backgroundSize: "cover",
	};

	return (
		<div
			className="container-fluid"
			style={{
				backgroundColor: "lightgray",
				backgroundRepeat: "repeat",
				backgroundSize: "cover",
			}}>
			<div className="row">
				<div className="col-12 fs-1 text-center mt-5">
					{" "}
					Guess the number between 1 and 20
				</div>

				<div className="col-12 text-center">
					<input
						type="number"
						style={{
							width: "130px",
							height: "80px",
							fontSize: "30px",
							marginTop: "5vw",
							border: "4px solid black",
							borderRadius: "16px",
						}}
						onChange={handleChange}
						min="1"
						max="20"
					/>
					<br />
					<button
						className="btn btn-primary btn-lg mt-5"
						onClick={onSubmit}
						disabled={numberequal}>
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
