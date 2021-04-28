import React from "react";
import PropTypes from "prop-types";
import Cities from "../../global/Cities.js";
import Weather from "../../global/Weather.js";
import WeatherDisplay from "../Meteorology/Weather/Weather.js";
import Temperature from "../Meteorology/Temperature/Temperature.js";
import Wind from "../Meteorology/Wind/Wind.js";
import "./SimpleCity.css";

export default class SimpleCity extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			city: null,
			error: null,
			menuOpened: false,
			deleted: false
		};
	}

	/*********************************
	 * Events
	 *********************************/

	/* It's an arrow function to keep access to {this} without binding. */
	handleClick = () => {
		const { isLoaded, city } = this.state;
		const { name, onClick } = this.props;

		if (isLoaded) {
			onClick(name, city);
		}
	}

	/* It's an arrow function to keep access to {this} without binding. */
	handleDeletion = () => {
		const { uid, name } = this.props;

		Cities.delete(uid, name)
			.then(response => {
				if (response.code === 202) {
					this.setState({ deleted: true });
				} else {
					console.error(response.message);
				}
			})
			.catch(console.error);
	}

	/*********************************
	 * React functions
	 *********************************/

	componentDidMount() {
		const { name } = this.props;

		Weather.getCurrent(name)
			.then(response => this.setState({ city: response, isLoaded: true }))
			.catch(err => this.setState({ error: err }));
	}

	render() {
		const { isLoaded, menuOpened, deleted } = this.state;
		const { name } = this.props;

		if (deleted) return null;

		return (
			<div className="simple-city" onClick={this.handleClick}>
				<h2 className="simple-city-name">{name}</h2>
				{ isLoaded ? this.renderData() : this.renderLoading() }
				<div className={`simple-city-delete ${menuOpened ? "menuOpened" : "menuClosed"}`}>
					<label className="scd-button">
						<input className="scd-checkbox" type="checkbox" onChange={e => this.setState({ menuOpened: e.target.checked })}/>
					</label>

					<div className={`scd-menu ${menuOpened ? "open" : "close"}`}>
						<ul>
							<li className="scd-menu-item" onClick={this.handleDeletion}>
								<span>☻</span> Supprimer
							</li>
						</ul>
					</div>
				</div>
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
							<WeatherDisplay weather={city.weather}/>
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
	uid: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func
};

SimpleCity.defaultProps = {
	onClick: () => {}
};