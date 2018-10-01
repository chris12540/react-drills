import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
		};
	}

	render() {
		let message = [];
		for (const food of this.state.list) {
			message.push(<h1>{food}</h1>);
		}
		return (
			<div className="App">
				<ul>{message}</ul>
			</div>
		);
	}
}

export default App;
