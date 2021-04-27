import { Redirect } from "react-router";
import useToken from "./useToken.js";

const withAuth = Component => {
	const AuthRoute = props => {
		const { token } = useToken();
		return token ? <Component {...props}/> : <Redirect to="/login"/>;
	};

	return AuthRoute;
};

export default withAuth;