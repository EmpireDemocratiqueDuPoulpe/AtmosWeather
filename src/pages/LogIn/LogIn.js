import React, { useState } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import useAuth from "../../components/Auth/useAuth.js";
import withAuth from "../../components/Auth/withAuth.js";
import Users from "../../global/Users.js";

function LogIn(props) {
	const { token, uid, username } = useAuth();
	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();

	const handleSubmit = async event => {
		event.preventDefault();

		Users.login(email, password)
			.then(user => {
				token.set(user.token);
				uid.set(user.uid);
				username.set(user.username);
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

export default withRouter(withAuth(LogIn, true));