import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			todo: ["Finish this app"],
			task: ""
		};
	}

	addTask = () => {
		const temp = this.state.todo.slice();
		temp.push(this.state.task);
		this.setState({
			todo: temp,
			task: ""
		});
	};

	render() {
		const { todo, task } = this.state;

		return (
			<div className="App">
				<h4>My TODO List</h4>
				<input
					type="text"
					value={task}
					onChange={e => {
						this.setState({ task: e.target.value });
					}}
				/>
				<button onClick={this.addTask}>Add Task</button>
				<Todo list={todo} />
			</div>
		);
	}
}

export default App;
