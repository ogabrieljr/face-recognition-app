import React from "react";
import "./index.css";

export default function Recognition({ image, box }) {
	return (
		<div className="center ma">
			<div className="absolute mt3">
				<img id="inputImage" alt="" src={image} width="500px" height="auto" />
				<div
					className="bounding-box"
					style={{
						top: box.topRow,
						right: box.rightCol,
						bottom: box.bottomRow,
						left: box.leftCol
					}}
				/>
			</div>
		</div>
	);
}
