import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import "./index.css";
import Logo from "./components/Logo/Logo";
import ImageForm from "./components/ImageForm/ImageForm";
import Rank from "./components/Rank/Rank";
import Clarifai from "clarifai";
import Recognition from "./components/Recognition/Recognition";

const app = new Clarifai.App({
	apiKey: "de6c435c4bc94e4394563714d9928850"
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			image: ""
		};
	}
	change = e => this.setState({ input: e.target.value });
	submit = () => {
		this.setState({ image: this.state.input });
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
			function(response) {
				console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
			},
			function(err) {
				// there was an error
			}
		);
	};
	render() {
		return (
			<div>
				<Navigation />
				<Logo />
				<Rank />
				<ImageForm change={this.change} submit={this.submit} />
				<Recognition image={this.state.image} />
			</div>
		);
	}
}

export default App;
