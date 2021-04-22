import React from "react";
import PropTypes from "prop-types";
import Weather from "../../Weather/Weather.js";
import Wind from "../../Wind/Wind.js";
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

					<div className="fd-current-time">
						<span>{currentForecast.time}</span>
					</div>

					<div className="fd-next-time" onClick={this.toNextTime}/>
				</div>

				<div className="fd-data">
					<Weather weather={currentData.weather}/>

					<div>
						<span>{currentData.main.temp}</span>
						<span>Ressenti: {currentData.main.feels_like}</span>
						<span>Minimum: {currentData.main.temp_min}</span>
						<span>Maximum: {currentData.main.temp_max}</span>
					</div>

					<div>
						<span>Humidité: {currentData.main.humidity}%</span>
					</div>

					<div>
						<span>Pression atmosphérique: {currentData.main.pressure} hPa</span>
					</div>

					<div>
						<span>Couverture nuageuse: {currentData.clouds.all}%</span>
					</div>

					<div>
						<span>Visibilité: {currentData.visibility}m</span>
					</div>

					<div>
						<span>Précipitations: {currentData.pop}%</span>
					</div>

					{
						currentData.rain && (
							<div>
								<span>Pluie (3h): {currentData.rain["3h"] ?? 0}mm</span>
							</div>
						)
					}

					{
						currentData.snow && (
							<div>
								<span>Neige (3h): {currentData.snow["3h"] ?? 0}mm</span>
							</div>
						)
					}

					<Wind speed={currentData.wind.speed} deg={currentData.wind.deg}/>
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