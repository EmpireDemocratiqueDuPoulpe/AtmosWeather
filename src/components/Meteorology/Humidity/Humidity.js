import PropTypes from "prop-types";

const Humidity = (props) => (
	<span className="humidity">Humidit&eacute; : {props.value}&#37;</span>
);

Humidity.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired
};

export default Humidity;