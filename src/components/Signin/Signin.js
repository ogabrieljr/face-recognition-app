import React, { Component } from "react";

export default class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signinEmail: "",
			SigninPassword: ""
		};
	}

	onEmailChange = event => {
		this.setState({ signinEmail: event.target.value });
	};
	onPasswordChange = event => {
		this.setState({ SigninPassword: event.target.value });
	};
	onSubmit = () => {
		fetch("http://localhost:3000/signin", {
			method: "post",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				email: this.state.signinEmail,
				password: this.state.SigninPassword
			})
		})
			.then(res => res.json())
			.then(data => {
				if (data === "success") {
					this.props.onRouteChange("home");
				}
			});
	};

	render() {
		const { onRouteChange } = this.props;
		return (
			<div>
				<main className="pa4 black-80">
					<form className="measure center">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f4 fw6 ph0 mh0">Sign In</legend>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="email-address">
									Email
								</label>
								<input
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
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
						<div className="lh-copy mt3">
							<p
								onClick={() => onRouteChange("register")}
								className="f6 link dim black db pointer"
							>
								Sign up
							</p>
							<a href="#0" className="f6 link dim black db">
								Forgot your password?
							</a>
						</div>
					</form>
				</main>
			</div>
		);
	}
}
