import PropTypes from "prop-types";
import config from "../../../config/config";
import "./Wind.css";

const Wind = (props) => (
	<div className="sc-wind">
		{
			typeof props.deg === "number" && (
				<div className="sc-wind-arrow" style={{ transform: `rotate(${props.deg}deg)` }}/>
			)
		}

		<p className="sc-wind-speed">{props.speed} {getSpeedUnit()}</p>
	</div>
);

Wind.propTypes = {
	deg: PropTypes.number,
	speed: PropTypes.number.isRequired
};

export default Wind;

/**********************************
 * Functions
 **********************************/

function getSpeedUnit() {
	const { oweather } = config;

	// Unicode character corresponding to unit taken from https://www.compart.com/fr/unicode/
	switch (oweather.units) {
	case "metric":
		return "m/s";
	case "imperial":
		return "mph";
	case "standard":
	default:
		return "m/s";
	}
}