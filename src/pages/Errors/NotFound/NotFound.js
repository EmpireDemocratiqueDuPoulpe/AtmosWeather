import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div>
			<h2>Page inexistante</h2>
			<Link to="/">Retour à la page principale</Link>
		</div>
	);
}