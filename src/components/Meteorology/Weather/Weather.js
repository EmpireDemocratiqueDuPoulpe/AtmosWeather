import React from "react";
import PropTypes from "prop-types";
import "./Weather.css";

const Weather = (props) => (
	<div className="weather">
		{props.weather && (
			<React.Fragment>
				<div className="weather-icon">
					{ props.children ? (<React.Fragment>{props.children}</React.Fragment>) : null }
				</div>
				<h3 className="weather-text">{props.weather[0].description}</h3>
			</React.Fragment>
		)}
	</div>
);

Weather.propTypes = {
	weather: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			main: PropTypes.string,
			description: PropTypes.string,
			icon: PropTypes.string
		})
	).isRequired,
	children: PropTypes.any
};

Weather.defaultProps = { weather: null };

export default Weather;