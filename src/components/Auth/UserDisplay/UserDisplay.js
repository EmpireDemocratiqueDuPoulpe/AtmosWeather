import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import withAuth from "../withAuth.js";
import "./UserDisplay.css";

function UserDisplay(props) {
	const { token, username } = props;

	if (!token || !username) return null;

	return (
		<div className="user-display">
			<div className="user-pic"/>

			<div className="user-actions">
				<p className="username">{username}</p>
				<Link className="logout" to="/logout">D&eacute;connexion</Link>
			</div>
		</div>
	);
}

UserDisplay.propTypes = {
	token: PropTypes.string.isRequired,
	username: PropTypes.string
};

export default withAuth(UserDisplay);