import PropTypes from "prop-types";
import config from "../../../config/config";

const Temperature = (props) => (
	<p className="sc-temperature">{props.value} {getTemperatureUnit()}</p>
);

// TODO: Feels like
Temperature.propTypes = {
	value: PropTypes.number.isRequired,
	feelsLike: PropTypes.number
};

export default Temperature;

/**********************************
 * Functions
 **********************************/

function getTemperatureUnit() {
	const { oweather } = config;

	// Unicode character corresponding to unit taken from https://www.compart.com/fr/unicode/
	switch (oweather.units) {
	case "metric":
		return "\u2103";
	case "imperial":
		return "\u2109";
	case "standard":
	default:
		return "\u212A";
	}
}