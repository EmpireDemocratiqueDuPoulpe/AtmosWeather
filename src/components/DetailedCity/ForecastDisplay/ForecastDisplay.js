import React from "react";
import PropTypes from "prop-types";
import WeatherDisplay from "../../Meteorology/WeatherDisplay/WeatherDisplay.js";
import Temperature from "../../Meteorology/Temperature/Temperature.js";
import MinMaxTemperature from "../../Meteorology/MinMaxTemperature/MinMaxTemperature.js";
import Humidity from "../../Meteorology/Humidity/Humidity.js";
import Pressure from "../../Meteorology/Pressure/Pressure.js";
import Cloudiness from "../../Meteorology/Cloudiness/Cloudiness.js";
import Visibility from "../../Meteorology/Visibility/Visibility.js";
import Precipitation from "../../Meteorology/Precipitation/Precipitation.js";
import RainSnow from "../../Meteorology/RainSnow/RainSnow.js";
import Wind from "../../Meteorology/Wind/Wind.js";
import "./ForecastDisplay.css";

export default class ForecastDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentDate: 0,
			currentTime: 0
		};
	}

	/*********************************
	 * Events
	 *********************************/

	// FIXME: The page crash when switching to a date that doesn't have the previous time index in it.
	/* It's an arrow function to keep access to {this} without binding. */
	toPreviousDate = () => {
		const { currentDate } = this.state;
		const previousDate = Math.max(currentDate - 1, 0);

		if (currentDate !== previousDate) {
			this.setState({ currentDate: previousDate });
		}
	}

	/* It's an arrow function to keep access to {this} without binding. */
	toNextDate = () => {
		const { forecasts } = this.props;
		const { currentDate } = this.state;
		const nextDate = Math.min(currentDate + 1, forecasts.length - 1);

		if (currentDate !== nextDate) {
			this.setState({ currentDate: nextDate });
		}
	}

	/* It's an arrow function to keep access to {this} without binding. */
	toPreviousTime = () => {
		const { currentTime } = this.state;
		const previousTime = Math.max(currentTime - 1, 0);

		if (currentTime !== previousTime) {
			this.setState({ currentTime: previousTime });
		}
	}

	/* It's an arrow function to keep access to {this} without binding. */
	toNextTime = () => {
		const { forecasts } = this.props;
		const { currentDate, currentTime } = this.state;
		const nextTime = Math.min(currentTime + 1, forecasts[currentDate].data.length - 1);

		if (currentTime !== nextTime) {
			this.setState({ currentTime: nextTime });
		}
	}

	/*********************************
	 * React functions
	 *********************************/

	getTimeClasses(index) {
		const { currentTime } = this.state;

		if (index < currentTime - 1) return "fd-time before-previous";
		if (index === currentTime - 1) return "fd-time previous";
		if (index === currentTime) return "fd-time current";
		if (index === currentTime + 1) return "fd-time next";
		if (index > currentTime + 1) return "fd-time after-next";
	}

	render() {
		const { forecasts } = this.props;
		const { currentDate, currentTime } = this.state;
		const currentForecasts = forecasts[currentDate];
		const currentForecast = currentForecasts.data[currentTime];
		const currentData = currentForecast.forecast;

		// TODO: Check if the currentDate and currentTime need to be reset on city change
		return (
			<div className="forecast-display">
				<div className="fd-date-changer">
					<div className="fd-previous-date" onClick={this.toPreviousDate}/>

					<div className="fd-current-date">
						<span>{currentForecasts.date}</span>
					</div>

					<div className="fd-next-date" onClick={this.toNextDate}/>
				</div>

				<div className="fd-time-changer">
					<div className="fd-previous-time" onClick={this.toPreviousTime}/>

					<div className="fd-all-time">
						{
							currentForecasts.data.map((data, index) => (
								<span
									key={index}
									className={this.getTimeClasses(index)}
								>
									{data.time}
								</span>
							))
						}
					</div>

					<div className="fd-next-time" onClick={this.toNextTime}/>
				</div>

				<div className="fd-data">
					<WeatherDisplay weather={currentData.weather} bigIcon={true}>
						<Wind speed={currentData.wind.speed} deg={currentData.wind.deg}/>
					</WeatherDisplay>

					<Temperature value={currentData.main.temp} feelsLike={currentData.main.feels_like}/>
					<MinMaxTemperature min={currentData.main.temp_min} max={currentData.main.temp_max}/>

					<Humidity value={currentData.main.humidity} titleWidth="50%"/>
					<Pressure value={currentData.main.pressure} titleWidth="50%"/>

					<Cloudiness value={currentData.clouds.all} titleWidth="50%"/>
					<Visibility inMeters={currentData.visibility} toKilometersAt={1000} titleWidth="50%"/>

					{currentData.pop ? (<Precipitation value={currentData.pop}  titleWidth="50%"/>) : null}
					<RainSnow
						rainLevel={currentData.rain ? currentData.rain["3h"] : null}
						snowLevel={currentData.snow ? currentData.snow["3h"] : null}
						titleWidth="50%"
					/>
				</div>
			</div>
		);
	}
}

ForecastDisplay.propTypes = {
	forecasts: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			data: PropTypes.arrayOf(
				PropTypes.shape({
					time: PropTypes.string.isRequired,
					forecast: PropTypes.object.isRequired
				})
			)
		})
	)
};