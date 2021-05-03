import { Redirect } from "react-router";
import useAuth from "../../components/Auth/useAuth.js";

export default function LogOut() {
	const { token, uid, username, all } = useAuth();

	if (token.value || uid.value || username.value) {
		all.delete();
		return null;
	} else {
		return <Redirect to="/login"/>;
	}
}
