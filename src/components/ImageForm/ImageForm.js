
import React from "react";

export default function ImageForm({change, submit}) {
	return (
		<div className="tc">
			<p>faces</p>
			<div>
				<input onChange={change} />
				<button onClick={submit}>btn</button>
			</div>
		</div>
	);
}
