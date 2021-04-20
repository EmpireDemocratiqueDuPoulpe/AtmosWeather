import React from "react";
import PropTypes from "prop-types";
//import moment from "moment";
import { DateTime } from "luxon";
import config from "../../config/config";

const DEFAULT_CURRENT_CITY = { name: "", weather: null };

export default class DetailedCity extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentCity: DEFAULT_CURRENT_CITY,
			isLoaded: false,
			forecast: null,
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

	restructureForecast() {
		const { forecast: { list } } = this.state;
		const { oweather } = config;

		// TODO: Uninstall Moment.js
		//moment.locale(oweather.lang);

		list.map((f, index) => {
			//const timestamp = moment.unix(f.dt);
			//const date = timestamp.format("LL");
			//const time = timestamp.format("LT");
			const timestamp = DateTime.fromSeconds(f.dt).setLocale(oweather.lang);
			const date = timestamp.toFormat("cccc dd LLL");
			const time = timestamp.toFormat("HH:mm");

			console.log(`Index: ${index}`);
			console.log(date);
			console.log(time);

			// TODO: Create one section per day and per hour and store current section in state
		});
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
		const { error } = this.state;

		return(
			<div className="dc-body">
				{
					error ? (
						<p className="dc-error">Une erreur est survenue: <span>{error}</span></p>
					) : (
						<div className="dc-data">
							<p>Chargé</p>
						</div>
					)
				}
			</div>
		);
	}
}

DetailedCity.propTypes = {
	//name: PropTypes.string.isRequired,
	//weather: PropTypes.object
	onRef: PropTypes.func.isRequired
};