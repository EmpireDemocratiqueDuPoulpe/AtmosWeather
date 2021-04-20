import React from "react";
import SimpleCity from "../../components/SimpleCity/SimpleCity";
import DetailedCity from "../../components/DetailedCity/DetailedCity";
import "./Index.css";

const DEFAULT_CITIES = [
	"Paris", "Château-L'Abbaye", "Helsinki"
];

const DEFAULT_CURRENT_CITY = { name: "", weather: null };

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cities: DEFAULT_CITIES,
			//currentCity: DEFAULT_CURRENT_CITY
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
			//this.setState({ currentCity: { name: name, weather: weather } });
			this.detailedCity.displayNewCity(name, weather);
		}
	}

	/*********************************
	 * React functions
	 *********************************/

	render() {
		const { cities } = this.state;

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
					<DetailedCity onRef={ ref => this.detailedCity = ref }/>
				</div>
			</div>
		);
	}
}