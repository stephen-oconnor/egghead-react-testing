import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Test = () => <div>Testing</div>;
const Title = ({ text }) => <div>{text}</div>;

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>React</h1>
				<Title text="Hello" />
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

export class Link extends Component {
	render() {
		return this.props.hide ? null : <a href={this.props.address}>Click</a>;
	}
}

export default App;
