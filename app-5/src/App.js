import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Image src="https://picsum.photos/500/400/?random" />
			</div>
		);
	}
}

export default App;
