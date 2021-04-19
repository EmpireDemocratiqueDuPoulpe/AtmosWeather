import React from "react";
import PropTypes from "prop-types";
import Weather from "./Weather/Weather";
import Temperature from "./Temperature/Temperature";
import Wind from "./Wind/Wind.js";
import config from "../../config/config.js";
import "./SimpleCity.css";

export default class SimpleCity extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			city: null,
			error: null
		};
	}

	componentDidMount() {
		const { name } = this.props;
		const { oweather } = config;
		const options = { headers: { Accept: "application/json" } };

		fetch(
			`https://${oweather.endpoint}?q=${name}&units=${oweather.units}&lang=${oweather.lang}&appid=${oweather.key}`,
			options
		)
			.then(response => response.json())
			.then(json => this.setState({ city: json, isLoaded: true }))
			.catch(err => this.setState({ error: err }));
	}

	render() {
		const { isLoaded } = this.state;
		const { name } = this.props;

		return (
			<div className="simple-city">
				<h2 className="simple-city-name">{name}</h2>
				{ isLoaded ? this.renderData() : this.renderLoading() }
			</div>
		);
	}

	renderLoading() {
		return (
			<p>Chargement en cours...</p>
		);
	}

	renderData() {
		const { city, error } = this.state;
		const { main, wind } = city;

		// noinspection EqualityComparisonWithCoercionJS
		const showTemperature = main != undefined && main.temp != undefined;
		// noinspection EqualityComparisonWithCoercionJS
		const showWind = wind != undefined && wind.speed != undefined;

		return(
			<div className="sc-body">
				{
					error ? (
						<p className="sc-error">Une erreur est survenue: <span>{error}</span></p>
					) : (
						<div className="sc-data">
							<Weather weather={city.weather}/>
							{ showTemperature && <Temperature value={main.temp} feelsLike={main.feels_like}/> }
							{ showWind && <Wind speed={wind.speed} deg={wind.deg}/> }
						</div>
					)
				}
			</div>
		);
	}
}

SimpleCity.propTypes = {
	name: PropTypes.string.isRequired
};