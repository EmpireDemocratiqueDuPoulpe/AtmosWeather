import { Redirect } from "react-router";
import useToken from "../../components/Auth/useToken.js";

export default function LogOut() {
	const { delToken } = useToken();
	delToken();

	return <Redirect to="/login"/>;
}
