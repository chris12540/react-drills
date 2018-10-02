import React, { Component } from "react";
import Todo from "./Todo";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      task: ""
    };
  }

  addTask = () => {
    const todoList = this.state.todo.slice();
    todoList.push(this.state.task);
    this.setState({
      todo: todoList,
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
          onKeyPress={e => {
            if (e.key === "Enter") this.addTask;
          }}
        />
        <button onClick={this.addTask}>Add Task</button>
        <Todo list={todo} />
      </div>
    );
  }
}

export default App;
