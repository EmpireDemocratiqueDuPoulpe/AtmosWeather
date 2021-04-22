import PropTypes from "prop-types";
import config from "../../../config/config.js";
import "./Temperature.css";

const { oweather } = config;

const Temperature = (props) => (
	<div className="temperature">
		<span className="real-temp">{props.value}{oweather.getTemperatureUnit()}</span>
		{props.feelsLike && (
			<span className="feels-like">({props.feelsLike}{oweather.getTemperatureUnit()})</span>
		)}
	</div>
);

Temperature.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	feelsLike: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	])
};

export default Temperature;