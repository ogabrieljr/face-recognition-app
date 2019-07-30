import React from "react";
import Navigation from "./components/Navigation/Navigation";
import "./index.css";
import Logo from "./components/Logo/Logo";
import ImageForm from "./components/ImageForm/ImageForm";
import Rank from "./components/Rank/Rank";

function App() {
	return (
		<div>
			<Navigation />
			<Logo />
			<Rank />
			<ImageForm />
		</div>
	);
}

export default App;
