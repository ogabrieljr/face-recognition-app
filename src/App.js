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

	faceLocation = data => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById("inputImage");
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height
		};
	};
	display = box => {
		console.log(box)
		this.setState({ box });
	};

	submit = () => {
		this.setState({ image: this.state.input });
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			.then(response => {
				this.display(this.faceLocation(response));
			})
			.catch(err => console.log(err));
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
