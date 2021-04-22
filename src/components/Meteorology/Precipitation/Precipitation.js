import PropTypes from "prop-types";

const Precipitation = (props) => (
	<span className="precipitation">Pr&eacute;cipitations : {props.value * 100}&#37;</span>
);

Precipitation.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired
};

export default Precipitation;