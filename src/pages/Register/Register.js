import React from "react";
import Users from "../../global/Users.js";

export default class Register extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	/*********************************
	 * Events
	 *********************************/

	/* It's an arrow function to keep access to {this} without binding. */
	handleInputChange = event => {
		const target = event.target;
		const name = target.name;
		const value = target.type === "checkbox" ? target.checked : target.value;

		this.setState({ [name]: value });
	}

	/* It's an arrow function to keep access to {this} without binding. */
	handleSubmit = event => {
		event.preventDefault();
		this.registerUser();
	}

	registerUser() {
		const { username, email, password1, password2 } = this.state;

		Users.register(username, email, password1, password2)
			.then(response => console.log(response))
			.catch(console.error);
	}

	/*********************************
	 * React functions
	 *********************************/

	render() {
		return (
			<div className="register-box">
				<h2>Inscription</h2>

				<form onSubmit={this.handleSubmit}>
					<label htmlFor="username">Nom d&apos;utilisateur</label>
					<input id="username" name="username" type="text" onChange={this.handleInputChange} required/>

					<label htmlFor="email">E-mail</label>
					<input id="email" name="email" type="email" onChange={this.handleInputChange} required/>

					<label htmlFor="password1">Mot de passe</label>
					<input id="password1" name="password1" type="password" onChange={this.handleInputChange} required/>

					<label htmlFor="password2">Mot de passe (confirmation)</label>
					<input id="password2" name="password2" type="password" onChange={this.handleInputChange} required/>

					<input type="submit" value="S'inscrire"/>
				</form>
			</div>
		);
	}
}