import PropTypes from "prop-types";

const Pressure = (props) => (
	<span className="pressure">Pression atmoshp&eacute;rique : {props.value} hPa</span>
);

Pressure.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired
};

export default Pressure;