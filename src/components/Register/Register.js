import React, { Component } from "react";

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			name: ""
		};
	}

	onEmailChange = event => {
		this.setState({ email: event.target.value });
	};
	onPasswordChange = event => {
		this.setState({ password: event.target.value });
	};
	onNameChange = event => {
		this.setState({ name: event.target.value });
	};

	onSubmit = () => {
		fetch("http://localhost:3000/register", {
			method: "post",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
			.then(res => res.json())
			.then(user => {
				if (user) {
					this.props.loadUser(user);
					this.props.onRouteChange("home");
				}
			});
	};

	render() {
		return (
			<div>
				<main className="pa4 black-80">
					<form method="POST" className="measure center">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f4 fw6 ph0 mh0">Register</legend>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="name">
									Name
								</label>
								<input
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="name"
									name="name"
									id="name"
									onChange={this.onNameChange}
								/>
							</div>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="email-address">
									Email
								</label>
								<input
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="email"
									name="email-address"
									id="email-address"
									onChange={this.onEmailChange}
								/>
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6" htmlFor="password">
									Password
								</label>
								<input
									className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="password"
									name="password"
									id="password"
									onChange={this.onPasswordChange}
								/>
							</div>
							<label className="pa0 ma0 lh-copy f6 pointer">
								<input type="checkbox" /> Remember me
							</label>
						</fieldset>
						<div className="">
							<input
								onClick={() => this.onSubmit()}
								className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
								type="submit"
								value="Sign in"
							/>
						</div>
						<div className="lh-copy mt3" />
					</form>
				</main>
			</div>
		);
	}
}
