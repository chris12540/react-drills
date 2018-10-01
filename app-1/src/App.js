import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			userInput: ""
		};
	}

	render() {
		return (
			<div className="App">
				<input
					type="text"
					value={this.state.userInput}
					onChange={e => {
						this.setState({
							userInput: e.target.value
						});
					}}
				/>
				<br />
				<br />
				{this.state.userInput}
			</div>
		);
	}
}

export default App;
