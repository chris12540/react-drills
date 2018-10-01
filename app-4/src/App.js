import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			userName: "",
			password: ""
		};
	}

	login = () => {
		alert("Username: " + this.state.userName + " Password: " + this.state.password);
	};

	render() {
		return (
			<div className="App">
				<input
					type="text"
					onChange={e => {
						this.setState({
							userName: e.target.value
						});
					}}
				/>
				<input
					type="password"
					onChange={e => {
						this.setState({
							password: e.target.value
						});
					}}
				/>
				<button onClick={this.login}>Login</button>
			</div>
		);
	}
}

export default App;
