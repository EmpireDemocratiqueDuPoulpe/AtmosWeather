import { Redirect } from "react-router";
import useAuth from "./useAuth.js";

const withAuth = (Component, reverse = false) => {
	const AuthRoute = props => {
		const { token, uid, username } = useAuth();
		let isAuth = (token.value && uid.value);
		const redirectURL = reverse ? "/" : "/login";

		console.log(token, uid, username);
		console.log(Component);

		if (reverse) isAuth = !isAuth;

		return isAuth
			? <Component {...props} token={token.value} uid={uid.value} username={username.value}/>
			: <Redirect to={redirectURL}/>;
	};

	return AuthRoute;
};

export default withAuth;