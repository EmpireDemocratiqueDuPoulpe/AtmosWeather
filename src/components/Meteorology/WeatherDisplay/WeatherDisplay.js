import React from "react";
import PropTypes from "prop-types";
import Weather from "../../../global/Weather.js";
import "./WeatherDisplay.css";

const WeatherDisplay = (props) => (
	<div className="weather">
		{props.weather && (
			<React.Fragment>
				<div className={`weather-icon ${props.squareIcon ? "square-keep-ratio" : ""} ${props.bigIcon ? "big" : ""} ${Weather.getIcon(props.weather[0].id)}`}>
					{ props.children ? (<React.Fragment>{props.children}</React.Fragment>) : null }
				</div>
				<h3 className="weather-text ellipsis">{props.weather[0].description}</h3>
			</React.Fragment>
		)}
	</div>
);

WeatherDisplay.propTypes = {
	weather: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			main: PropTypes.string,
			description: PropTypes.string,
			icon: PropTypes.string
		})
	).isRequired,
	squareIcon: PropTypes.bool.isRequired,
	bigIcon: PropTypes.bool.isRequired,
	children: PropTypes.any
};

WeatherDisplay.defaultProps = {
	weather: null,
	squareIcon: true,
	bigIcon: false
};

export default WeatherDisplay;