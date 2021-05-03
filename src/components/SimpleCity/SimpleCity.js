import React from "react";
import PropTypes from "prop-types";
import Cities from "../../global/Cities.js";
import Weather from "../../global/Weather.js";
import WeatherDisplay from "../Meteorology/WeatherDisplay/WeatherDisplay.js";
import Temperature from "../Meteorology/Temperature/Temperature.js";
import Wind from "../Meteorology/Wind/Wind.js";
import { ReactComponent as MoreIcon } from "../../assets/images/more_horiz_black_24dp.svg";
import { ReactComponent as DeleteIcon } from "../../assets/images/remove_circle_black_24dp.svg";
import "./SimpleCity.css";

export default class SimpleCity extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			city: null,
			error: null,
			isPressed: false,
			menuOpened: false,
			deleted: false
		};
	}

	/*********************************
	 * Events
	 *********************************/

	/* It's an arrow function to keep access to {this} without binding. */
	handlePress = () => {
		this.setState({ isPressed: true });
	}

	/* It's an arrow function to keep access to {this} without binding. */
	handleMouseLeave = () => {
		const { isPressed } = this.state;

		if (isPressed) {
			this.setState({ isPressed: false });
		}
	}

	handleClick = () => {
		const { isLoaded, city } = this.state;
		const { name, onClick } = this.props;

		this.setState({ isPressed: false });

		if (isLoaded) {
			onClick(name, city);
		}
	}

	/* It's an arrow function to keep access to {this} without binding. */
	handleMenuClick = event => {
		event.stopPropagation();
		const { menuOpened } = this.state;

		this.setState({ menuOpened: !menuOpened, isPressed: false });
	}

	/* It's an arrow function to keep access to {this} without binding. */
	handleDeletion = event => {
		event.stopPropagation();
		const { uid, name } = this.props;

		Cities.delete(uid, name)
			.then(response => {
				if (response.ok) {
					this.setState({ deleted: true });
				} else {
					console.error(response);
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
			.then(response => {
				if (response.error) {
					this.setState({ error: response.error });
				} else {
					this.setState({ city: response, isLoaded: true });
				}
			})
			.catch(err => this.setState({ error: err }));
	}

	render() {
		const { isLoaded, menuOpened, isPressed, deleted } = this.state;
		const { name } = this.props;

		if (deleted) return null;

		return (
			<div
				className={`simple-city ${isPressed  ? "pressed" : ""}`}
				onMouseDown={this.handlePress}
				onMouseLeave={this.handleMouseLeave}
				onClick={this.handleClick}
			>
				<h2 className="simple-city-name highlight-font ellipsis">{name}</h2>

				{ isLoaded ? this.renderData() : this.renderLoading() }

				<div className={`simple-city-delete ${menuOpened ? "menuOpened" : "menuClosed"}`}>
					<div className="scd-button" onClick={this.handleMenuClick}>
						<MoreIcon/>
					</div>

					<div className={`scd-menu ${menuOpened ? "open" : "close"}`}>
						<ul>
							<li className="scd-menu-item red-hover" onClick={this.handleDeletion}>
								<DeleteIcon className="scd-menu-item-icon"/>
								<span>Supprimer</span>
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
							<WeatherDisplay weather={city.weather}>
								{ showWind && <Wind speed={wind.speed} deg={wind.deg}/> }
							</WeatherDisplay>
							{ showTemperature && <Temperature value={main.temp} feelsLike={main.feels_like}/> }
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