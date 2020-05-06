import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Test = () => <div>Testing</div>;
const Title = ({ text }) => <div>{text}</div>;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			on: false,
			input: "",
			mainColor: "blue",
			lifeCycle: "",
		};
	}

	componentDidMount() {
		this.setState({ lifeCycle: "componentDidMount" });
	}

	handleStrings(str) {
		if (str === "Hello World") {
			return true;
		} else {
			return false;
		}
	}

	render() {
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
					<p className={"button-state"}>{this.state.on ? "Yes!" : "No!"}</p>
					<button onClick={() => this.setState({ on: true })}>Click</button>
					<h2>{this.state.input}</h2>
					<input
						type="text"
						onChange={(event) =>
							this.setState({ input: event.currentTarget.value })
						}
					/>
					<h3 className={this.state.mainColor}>Yo</h3>
					<p className={"lifeCycle"}>{this.state.lifeCycle}</p>
				</header>
				<Test />
			</div>
		);
	}
}

export class Link extends Component {
	render() {
		return this.props.hide ? null : <a href={this.props.address}>Click</a>;
	}
}

export default App;
