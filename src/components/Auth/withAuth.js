import { Redirect } from "react-router";
import useAuth from "./useAuth.js";

const withAuth = (Component, reverse = false) => {
	const AuthRoute = props => {
		const { token, uid } = useAuth();
		let isAuth = (token.value && uid.value);
		const redirectURL = reverse ? "/" : "/login";

		if (reverse) isAuth = !isAuth;

		return isAuth ? <Component {...props}/> : <Redirect to={redirectURL}/>;
	};

	return AuthRoute;
};

export default withAuth;