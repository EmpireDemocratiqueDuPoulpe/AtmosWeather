import PropTypes from "prop-types";
import "./Cloudiness.css";

function Cloudiness(props) {
	const { value, titleWidth } = props;

	return (
		<p className="cloudiness">
			<span className="title" style={{ width: titleWidth }}>Couverture nuageuse :</span> <span className="value">{value}&#37;</span>
		</p>
	);
}

Cloudiness.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	titleWidth: PropTypes.string.isRequired
};


Cloudiness.defaultProps = {
	titleWidth: "auto"
};

export default Cloudiness;