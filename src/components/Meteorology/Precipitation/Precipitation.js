import PropTypes from "prop-types";
import "./Precipitation.css";

function Precipitation(props) {
	const { value, titleWidth } = props;
	const convertedVal = (value * 100).toFixed(0);

	return (
		<p className="precipitation">
			<span className="title" style={{ width: titleWidth }}>Pr&eacute;cipitations :</span> <span className="value">{convertedVal}&#37;</span>
		</p>
	);
}

Precipitation.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	titleWidth: PropTypes.string.isRequired
};

Precipitation.defaultProps = {
	titleWidth: "auto"
};

export default Precipitation;