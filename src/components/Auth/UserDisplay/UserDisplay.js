import { Link } from "react-router-dom";
import useAuth from "../useAuth.js";
import "./UserDisplay.css";

export default function UserDisplay() {
	const { token, username } = useAuth();

	if (!token.value || !username.value) return null;

	return (
		<div className="user-display">
			<div className="user-pic"/>

			<div className="user-actions">
				<p className="username">{username.value}</p>
				<Link className="logout" to="/logout">D&eacute;connexion</Link>
			</div>
		</div>
	);
}