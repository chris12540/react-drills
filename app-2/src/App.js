import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
		};
	}

	render() {
		let message = this.state.list.map(food => <h1>{food}</h1>);
		return <div className="App">{message}</div>;
	}
}

export default App;
