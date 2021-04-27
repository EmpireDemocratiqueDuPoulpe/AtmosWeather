import React, { useState } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import useToken from "../../components/Auth/useToken.js";
import useUID from "../../components/Auth/useUID.js";
import config from "../../config/config.js";

async function loginUser(email, password) {
	const { awApi } = config;
	const options = {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify({
			email: email,
			password: password
		})
	};

	return fetch(awApi.users.login, options)
		.then(response => response.json())
		.catch(console.error);
}

function LogIn(props) {
	const { setToken } = useToken();
	const { setUID } = useUID();
	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();

	const handleSubmit = async event => {
		event.preventDefault();

		const user = await loginUser(email, password);
		setToken(user.token);
		setUID(user.uid);

		props.history.push("/");
	};

	return (
		<div className="login-box">
			<h2>Connexion</h2>

			<form onSubmit={handleSubmit}>
				<label htmlFor="email">E-mail</label>
				<input id="email" name="email" type="email" onChange={e => setEmail(e.target.value)} required/>

				<label htmlFor="password">Mot de passe</label>
				<input id="password" name="password" type="password" onChange={e => setPassword(e.target.value)} required/>

				<input type="submit" value="Se connecter"/>
			</form>
		</div>
	);
}

LogIn.propTypes = {
	history: PropTypes.object
};

export default withRouter(LogIn);