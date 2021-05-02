import PropTypes from "prop-types";
import "./Humidity.css";

function Humidity(props) {
	const { value, titleWidth } = props;

	return (
		<p className="humidity">
			<span className="title" style={{ width: titleWidth }}>Humidit&eacute; :</span> <span className="value">{value}&#37;</span>
		</p>
	);
}

Humidity.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	titleWidth: PropTypes.string.isRequired
};

Humidity.defaultProps = {
	titleWidth: "auto"
};

export default Humidity;