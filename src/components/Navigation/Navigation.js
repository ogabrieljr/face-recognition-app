import React from "react";

export default function Navigation({ onRouteChange, isSignedIn }) {
	if (isSignedIn) {
		return (
			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				<nav>
					<p
						onClick={() => onRouteChange("signout")}
						className="f3 link dim black underline pa3 pointer"
					>
						Sign out
					</p>
				</nav>
			</div>
		);
	} else {
		return (
			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				<nav>
					<p
						onClick={() => onRouteChange("signin")}
						className="f3 link dim black underline pa3 pointer"
					>
						Sign in
					</p>
					<p
						onClick={() => onRouteChange("register")}
						className="f3 link dim black underline pa3 pointer"
					>
						register
					</p>
				</nav>
			</div>
		);
	}
}
