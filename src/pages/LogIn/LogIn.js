import React, { useState } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import useToken from "../../components/Auth/useToken.js";
import useUID from "../../components/Auth/useUID.js";
import Users from "../../global/Users.js";

function LogIn(props) {
	const { setToken } = useToken();
	const { setUID } = useUID();
	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();

	const handleSubmit = async event => {
		event.preventDefault();

		Users.login(email, password)
			.then(user => {
				setToken(user.token);
				setUID(user.uid);
				props.history.push("/");
			})
			.catch(console.error);
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