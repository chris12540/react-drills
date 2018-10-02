import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			people: []
		};
	}
	componentDidMount() {
		let promise = axios.get("https://swapi.co/api/people");
		promise.then(res => {
			this.setState({
				people: res.data.results
			});
		});
	}
	render() {
		let people = this.state.people.map((e, i) => {
			return <h3 key={i}>{e.name}</h3>;
		});
		return (
			<div className="App">
				<h1>Star Wars!</h1>
				{data}
			</div>
		);
	}
}

export default App;
