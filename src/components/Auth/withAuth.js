import { Redirect } from "react-router";
import useAuth from "./useAuth.js";

const withAuth = (Component, reverse = false) => {
	const AuthRoute = props => {
		const { token, uid, username } = useAuth();
		let willRedirect = (!token.value || !uid.value);
		const url = window.location.href;
		const redirectURL = reverse ? "/" : "/login";

		if (reverse) willRedirect = !willRedirect;

		if ((url.includes("/login") || url.includes("/register")) && willRedirect) {
			willRedirect = false;
		}

		return willRedirect
			? <Redirect to={redirectURL}/>
			: <Component {...props} token={token.value} uid={uid.value} username={username.value}/>;
	};

	return AuthRoute;
};

export default withAuth;