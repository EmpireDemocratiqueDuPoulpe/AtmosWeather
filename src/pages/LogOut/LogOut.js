import { Redirect } from "react-router";
import useToken from "../../components/Auth/useToken.js";

export default function LogOut() {
	const { setToken } = useToken();
	setToken(null);

	return <Redirect to="/login"/>;
}
