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
	const [ error, setError ] = useState();
	const [ redirect, setRedirect ] = useState(false);

	const handleSubmit = async event => {
		event.preventDefault();

		Users.login(email, password)
			.then(response => {
				if (response.error) {
					setError({message: response.error, fields: response.fields});
				} else {
					token.set(response.token);
					uid.set(response.uid);
					username.set(response.username);
					setRedirect(true);
				}
			})
			.catch(console.error);
	};

	if (redirect) return <Redirect to="/"/>;

	return (
		<div className="login">
			<div className="login-box">
				<h2>Connexion</h2>

				{error && <span className="error">{error.message}</span>}

				<form onSubmit={handleSubmit}>
					<InputField
						label="E-mail"
						placeholder="jimmy.barnes@caramail.fr"
						type="email"
						onChange={value => setEmail(value)}
						required={true}
						error={error ? error.fields.includes("email") : false}
					/>

					<InputField
						label="Mot de passe"
						placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
						type="password"
						onChange={value => setPassword(value)}
						required={true}
						error={error ? error.fields.includes("password") : false}
					/>

					<input type="submit" value="Se connecter"/>
					<Link className="link" to="/register">Je n&apos;ai pas de compte</Link>
				</form>
			</div>
		</div>
	);
}

export default withAuth(LogIn, true);