import React, { Component } from "react";
import List from "./List";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: List,
      search: ""
    };
  }

  render() {
    const { list, search } = this.state;

    let message = list
      .filter(item => item.substring(0, search.length) === search)
      .map(item => <h2>{item}</h2>);

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
        <div id="list">{message}</div>
      </div>
    );
  }
}

export default App;
