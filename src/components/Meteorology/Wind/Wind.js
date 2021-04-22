import PropTypes from "prop-types";
import config from "../../../config/config.js";
import "./Wind.css";

const { oweather } = config;

// TODO: Convert m/s to km/h
// FIXME: Arrow is maybe facing the wrong way
const Wind = (props) => (
	<div className="wind">
		{
			typeof props.deg === "number" && (
				<div className="wind-arrow" style={{ transform: `rotate(${props.deg}deg)` }}/>
			)
		}

		<p className="wind-speed">{props.speed}&nbsp;{oweather.getSpeedUnit()}</p>
	</div>
);

Wind.propTypes = {
	speed: PropTypes.number.isRequired,
	deg: PropTypes.number
};

export default Wind;