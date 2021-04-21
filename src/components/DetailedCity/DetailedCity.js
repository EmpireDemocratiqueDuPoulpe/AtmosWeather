import React from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";
import ForecastDisplay from "./ForecastDisplay/ForecastDisplay.js";
import config from "../../config/config.js";

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
		const { oweather } = config;
		const options = { headers: { Accept: "application/json" } };

		fetch(
			`https://${oweather.forecast}?q=${name}&units=${oweather.units}&lang=${oweather.lang}&appid=${oweather.key}`,
			options
		)
			.then(response => response.json())
			.then(json => {
				this.setState({ forecast: json, isLoaded: true }, () => {
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
				{ isLoaded ? this.renderData() : this.renderLoading() }
			</div>
		);
	}

	// TODO: Better loading (gif, animation)
	renderLoading() {
		return (
			<p>Chargement en cours...</p>
		);
	}

	renderData() {
		const { betterForecasts, error } = this.state;

		return(
			<div className="dc-body">
				{
					error ? (
						<p className="dc-error">Une erreur est survenue: <span>{error}</span></p>
					) : (
						<div className="dc-data">
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