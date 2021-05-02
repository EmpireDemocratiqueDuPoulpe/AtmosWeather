import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import useAuth from "../../components/Auth/useAuth.js";
import withAuth from "../../components/Auth/withAuth.js";
import Users from "../../global/Users.js";
import InputField from "../../components/InputField/InputField.js";
import "./Login.css";

function LogIn() {
	const { token, uid, username } = useAuth();
	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();
	const [ redirect, setRedirect ] = useState(false);

	const handleSubmit = async event => {
		event.preventDefault();

		Users.login(email, password)
			.then(user => {
				token.set(user.token);
				uid.set(user.uid);
				username.set(user.username);
				setRedirect(true);
			})
			.catch(console.error);
	};

	if (redirect) return <Redirect to="/"/>;

	return (
		<div className="login">
			<div className="login-box">
				<h2>Connexion</h2>

				<form onSubmit={handleSubmit}>
					<InputField
						label="E-mail"
						placeholder="jimmy.barnes@caramail.fr"
						type="email"
						onChange={value => setEmail(value)}
						required={true}
					/>

					<InputField
						label="Mot de passe"
						placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
						type="password"
						onChange={value => setPassword(value)}
						required={true}
					/>

					<input type="submit" value="Se connecter"/>
					<Link className="link" to="/register">Je n&apos;ai pas de compte</Link>
				</form>
			</div>
		</div>
	);
}

export default withAuth(LogIn, true);