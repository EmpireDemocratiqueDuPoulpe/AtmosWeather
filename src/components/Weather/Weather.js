import PropTypes from "prop-types";
import "./Weather.css";

const Weather = (props) => (
	<div className="sc-weather">
		{props.weather && (
			<div>
				<div className="sc-weather-icon"/>
				<h3 className="sc-weather-text">{props.weather[0].description}</h3>
			</div>
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
	).isRequired
};

Weather.defaultProps = { weather: null };

export default Weather;