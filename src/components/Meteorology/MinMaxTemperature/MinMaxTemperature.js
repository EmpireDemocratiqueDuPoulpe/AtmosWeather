import PropTypes from "prop-types";
import config from "../../../config/config.js";
import "./MinMaxTemperature.css";

const { oweather } = config;

const MinMaxTemperature = (props) => (
	<div className="min-max-temperature">
		<div className="min-temperature">
			<div className="arrow"/>
			<span>{props.min}{oweather.getTemperatureUnit()}</span>
		</div>

		<div className="max-temperature">
			<div className="arrow"/>
			<span>{props.max}{oweather.getTemperatureUnit()}</span>
		</div>
	</div>
);

MinMaxTemperature.propTypes = {
	min: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	max: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	])
};

MinMaxTemperature.defaultProps = {
	min: "--",
	max: "--"
};

export default MinMaxTemperature;