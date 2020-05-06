import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Test = () => <div>Testing</div>;

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>React</h1>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<ul className="test">
					<li>One</li>
					<li>Two</li>
					<li>Three</li>
				</ul>
			</header>
			<Test />
		</div>
	);
}

export default App;
