import React from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";
import Weather from "../../global/Weather.js";
import config from "../../config/config.js";
import WeatherDisplay from "../Meteorology/Weather/Weather.js";
import Temperature from "../Meteorology/Temperature/Temperature.js";
import MinMaxTemperature from "../Meteorology/MinMaxTemperature/MinMaxTemperature.js";
import Humidity from "../Meteorology/Humidity/Humidity.js";
import Pressure from "../Meteorology/Pressure/Pressure.js";
import Cloudiness from "../Meteorology/Cloudiness/Cloudiness.js";
import Visibility from "../Meteorology/Visibility/Visibility.js";
import Precipitation from "../Meteorology/Precipitation/Precipitation.js";
import RainSnow from "../Meteorology/RainSnow/RainSnow.js";
import Wind from "../Meteorology/Wind/Wind.js";
import ForecastDisplay from "./ForecastDisplay/ForecastDisplay.js";
import "./DetailedCity.css";

const DEFAULT_CURRENT_CITY = { name: "", weather: null };

export default class DetailedCity extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentCity: DEFAULT_CURRENT_CITY,
			isLoaded: false,
			forecast: null,
			betterForecasts: null,
			error: null
		};
	}

	displayNewCity(name, weather) {
		// Check the name
		const { currentCity } = this.state;
		if (!name) return;
		if (currentCity.name === name) return;

		// Update
		this.setState({ currentCity: { name: name, weather: weather }}, () => {
			this.getForecast();
		});
	}

	getForecast() {
		const { currentCity: { name } } = this.state;

		Weather.getWeekForecast(name)
			.then(response => {
				this.setState({ forecast: response, isLoaded: true }, () => {
					this.restructureForecast();
				});
			})
			.catch(err => this.setState({ error: err }));
	}

	/* This method takes the forecasts retrieved from the API and
	 * restructures them into a simple form used to display the data.
	 *
	 * The final result looks like this:
	 * newForecasts = [
	 *	{
	 *		date: "Tuesday 20 April"
	 *		data: [
	 *			{ time: "11:00", forecast: { ... } },
	 * 			{ time: "14:00", forecast: { ... } },
	 *			{ time: "18:00", forecast: { ... } },
	 *			...
	 *		]
	 *	},
	 *	...
	 * ]
	 */
	restructureForecast() {
		const { forecast: { list } } = this.state;
		const { oweather } = config;
		const newForecasts = [];

		let lastDate = null;

		list.map((f) => {
			const timestamp = DateTime.fromSeconds(f.dt).setLocale(oweather.lang);
			const date = timestamp.toFormat("cccc dd LLL");
			const time = timestamp.toFormat("HH:mm");

			const newF = { time: time, forecast: f };

			if (lastDate !== date) {
				lastDate = date;
				newForecasts.push({ date: date, data: [ newF ] });
			} else {
				newForecasts[newForecasts.length - 1].data.push(newF);
			}
		});

		this.setState({ betterForecasts: newForecasts });
	}

	/*********************************
	 * React functions
	 *********************************/

	componentDidMount() {
		this.props.onRef(this);
	}
	componentWillUnmount() {
		this.props.onRef(undefined);
	}

	render() {
		const { currentCity: { name }, isLoaded } = this.state;

		return (
			<div className="detailed-city">
				<h2 className="detailed-city-name">{name}</h2>
				{
					name ? (
						<React.Fragment>
							{ isLoaded ? this.renderData() : this.renderLoading() }
						</React.Fragment>
					) : (
						<React.Fragment>
							{ this.renderWaitingForClick() }
						</React.Fragment>
					)
				}
			</div>
		);
	}

	// TODO: Better loading (gif, animation)
	renderWaitingForClick() {
		return (
			<p>Cliquez sur une ville pour voir les pr&eacute;visions hebdomadaire.</p>
		);
	}

	// TODO: Better loading (gif, animation)
	renderLoading() {
		return (
			<p>Chargement en cours...</p>
		);
	}

	renderData() {
		const { currentCity: { weather }, betterForecasts, error } = this.state;

		// TODO: Add current weather
		return(
			<div className="dc-body">
				{
					error ? (
						<p className="dc-error">Une erreur est survenue: <span>{error}</span></p>
					) : (
						<div className="dc-data">
							<h3>Maintenant:</h3>
							<div className="dc-current">
								<WeatherDisplay weather={weather.weather}/>

								<Temperature value={weather.main.temp} feelsLike={weather.main.feels_like}/>
								<MinMaxTemperature min={weather.main.temp_min} max={weather.main.temp_max}/>

								<Wind speed={weather.wind.speed} deg={weather.wind.deg}/>

								<Humidity value={weather.main.humidity}/>
								<Pressure value={weather.main.pressure}/>

								<Cloudiness value={weather.clouds.all}/>
								<Visibility inMeters={weather.visibility} toKilometersAt={1000}/>

								<Precipitation value={weather.pop}/>
								<RainSnow
									rainLevel={weather.rain ? weather.rain["3h"] : null}
									snowLevel={weather.snow ? weather.snow["3h"] : null}
								/>
							</div>
							<h3>&Agrave; l&apos;avenir:</h3>
							{ betterForecasts && (
								<ForecastDisplay forecasts={betterForecasts}/>
							)}
						</div>
					)
				}
			</div>
		);
	}
}

DetailedCity.propTypes = {
	onRef: PropTypes.func.isRequired
};