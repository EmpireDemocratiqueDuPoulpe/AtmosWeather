import config from "../config/config.js";

const { awApi } = config;
/* ---- CREATE ---------------------------------- */
async function register(username, email, password1, password2) {
	const options = {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify({
			username: username,
			email: email,
			password1: password1,
			password2: password2
		})
	};

	const response = await fetch(awApi.users.register, options);
	return await response.json();
}

/* ---- READ ------------------------------------ */
async function login(email, password) {
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

	const response = await fetch(awApi.users.login, options);
	return await response.json();
}

/* ---- EXPORT ---------------------------------- */

const Users = { register, login };
export default Users;