import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import withAuth from "../../components/Auth/withAuth.js";
import Users from "../../global/Users.js";
import InputField from "../../components/InputField/InputField.js";
import "./Register.css";

function Register() {
	const [ username, setUsername ] = useState();
	const [ email, setEmail ] = useState();
	const [ password1, setPassword1 ] = useState();
	const [ password2, setPassword2 ] = useState();
	const [ error, setError ] = useState();
	const [ redirect, setRedirect ] = useState(false);

	const handleSubmit = async event => {
		event.preventDefault();

		Users.register(username, email, password1, password2)
			.then(response => {
				if (response.error) {
					setError({message: response.error, fields: response.fields});
				} else {
					setRedirect(true);
				}
			})
			.catch(console.error);
	};

	if (redirect) return <Redirect to="/login"/>;

	return (
		<div className="register">
			<div className="register-box">
				<h2 className="highlight-font">Inscription</h2>

				{error && <span className="error">{error.message}</span>}

				<form onSubmit={handleSubmit}>
					<InputField
						label="Nom d&apos;utilisateur"
						placeholder="Jimmy Barnes"
						type="text"
						maxLength={32}
						onChange={value => setUsername(value)}
						required={true}
						error={error ? error.fields.includes("username") : false}
					/>

					<InputField
						label="E-mail"
						type="email"
						placeholder="jimmy.barnes@caramail.fr"
						onChange={value => setEmail(value)}
						required={true}
						error={error ? error.fields.includes("email") : false}
					/>

					<InputField
						label="Mot de passe"
						type="password"
						minLength={8}
						maxLength={128}
						placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
						onChange={value => setPassword1(value)}
						required={true}
						error={error ? error.fields.includes("password") : false}
					/>

					<InputField
						label="Mot de passe (encore)"
						type="password"
						placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
						onChange={value => setPassword2(value)}
						required={true}
						error={error ? error.fields.includes("password") : false}
					/>

					<input type="submit" value="S'inscrire"/>
					<Link className="link" to="/login">J&apos;ai d&eacute;j&agrave; un compte</Link>
				</form>
			</div>
		</div>
	);
}

export default withAuth(Register, true);