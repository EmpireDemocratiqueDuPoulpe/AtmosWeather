import { Redirect } from "react-router";
import useToken from "./useToken.js";

const withAuth = Component => {
	const AuthRoute = () => {
		const { token } = useToken();
		return token ? <Component/> : <Redirect to="/login"/>;
	};

	return AuthRoute;
};

export default withAuth;