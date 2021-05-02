import PropTypes from "prop-types";
import "./Pressure.css";

function Pressure(props) {
	const { value, titleWidth } = props;

	return (
		<p className="pressure">
			<span className="title" style={{ width: titleWidth }}>Pression atmosph&eacute;rique :</span> <span className="value">{value} hPa</span>
		</p>
	);
}

Pressure.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	titleWidth: PropTypes.string.isRequired
};

Pressure.defaultProps = {
	titleWidth: "auto"
};

export default Pressure;