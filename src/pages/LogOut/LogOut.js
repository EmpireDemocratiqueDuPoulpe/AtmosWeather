import { Redirect } from "react-router";
import useAuth from "../../components/Auth/useAuth.js";

export default function LogOut() {
	const { all } = useAuth();
	all.delete();

	return <Redirect to="/login"/>;
}
