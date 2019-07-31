import React from "react";

export default function Recognition({ image }) {
	return (
		<div>
			<img id="inputImage" alt="" src={image} width="500px" height="auto" />
		</div>
	);
}
