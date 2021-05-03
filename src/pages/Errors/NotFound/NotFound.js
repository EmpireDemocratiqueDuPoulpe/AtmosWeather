import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="error-box error-404">
			<h2 className="error-code highlight-font">404</h2>
			<h3 className="error-message highlight-font">Page inexistante</h3>
			<h4 className="error-emoji highlight-font">( ͠° ʖ̯ ͡°)</h4>
			<Link className="error-link link red" to="/">Retour à la page principale</Link>
		</div>
	);
}