import PropTypes from "prop-types";
import config from "../../../config/config.js";
import "./Wind.css";

const { oweather } = config;

function Wind(props) {
	const windAngle = props.deg ? props.deg + 180 : null;
	const windSpeed = (props.speed * (oweather.speedToKmh ? 3.6 : 1)).toFixed(1);

	return (
		<div className="wind normal-font">
			{windAngle !== null && (
				<div className="wind-arrow" style={{ transform: `rotate(${windAngle}deg)` }}/>
			)}

			<p className="wind-speed">{windSpeed}&nbsp;{oweather.getSpeedUnit()}</p>
		</div>
	);
}

Wind.propTypes = {
	speed: PropTypes.number.isRequired,
	deg: PropTypes.number,
};

export default Wind;