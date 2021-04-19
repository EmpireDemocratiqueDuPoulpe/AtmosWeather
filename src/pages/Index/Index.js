import React from "react";
import SimpleCity from "../../components/SimpleCity/SimpleCity";
import DetailedCity from "../../components/DetailedCity/DetailedCity";
import "./Index.css";

const DEFAULT_CITIES = [
	"Paris", "Washington", "Venise", "Pékin","Château-L'Abbaye", "Sidney",
	"Montréal", "Helsinki", "Moscou", "Luxembourg", "Vatican"
];

const DEFAULT_CURRENT_CITY = { name: "", weather: null };

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cities: DEFAULT_CITIES,
			currentCity: DEFAULT_CURRENT_CITY
		};
	}

	/*********************************
	 * State
	 *********************************/

	resetCurrentCity() {
		this.setState({ currentCity: DEFAULT_CURRENT_CITY });
	}

	/*********************************
	 * Events
	 *********************************/

	/* It's an arrow function to keep access to {this} without binding. */
	handleCityClick = (name, weather) => {
		if (name !== undefined && weather !== undefined) {
			this.setState({ currentCity: { name: name, weather: weather } });
		}
	}

	/*********************************
	 * React functions
	 *********************************/

	render() {
		const { cities, currentCity } = this.state;

		return (
			<div className="sky">
				<div className="cities-wrapper">
					{
						cities.map((city, index) => {
							return <SimpleCity key={index} name={city} onClick={this.handleCityClick}/>;
						})
					}
				</div>

				<div className="city-detail">
					<DetailedCity name={currentCity.name} weather={currentCity.weather}/>
				</div>
			</div>
		);
	}
}