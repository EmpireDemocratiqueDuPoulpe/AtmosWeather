import React from "react";
import withAuth from "../../components/Auth/withAuth.js";
import SimpleCity from "../../components/SimpleCity/SimpleCity";
import DetailedCity from "../../components/DetailedCity/DetailedCity";
import "./Index.css";

const DEFAULT_CITIES = [
	"Paris", "Château-L'Abbaye", "Helsinki"
];

class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cities: DEFAULT_CITIES,
		};
	}

	/*********************************
	 * Events
	 *********************************/

	/* It's an arrow function to keep access to {this} without binding. */
	handleCityClick = (name, weather) => {
		if (name !== undefined && weather !== undefined) {
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

export default withAuth(Index);