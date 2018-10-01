import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
			search: ""
		};
	}

	render() {
		const { list, search } = this.state;

		let message = list.filter(item => item.substring(0, search.length) === search).map(item => <h1>{item}</h1>);

		return (
			<div className="App">
				<input
					type="text"
					onChange={e => {
						this.setState({
							search: e.target.value
						});
					}}
					placeholder="Type your search"
				/>
				{message}
			</div>
		);
	}
}

export default App;
