import React from "react";
import PropTypes from "prop-types";
import withAuth from "../../components/Auth/withAuth.js";
import Cities from "../../global/Cities.js";
import SimpleCity from "../../components/SimpleCity/SimpleCity";
import AddSimpleCity from "../../components/SimpleCity/AddSimpleCity/AddSimpleCity.js";
import DetailedCity from "../../components/DetailedCity/DetailedCity";
import "./Index.css";

class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cities: null,
			isLoaded: false,
			error: null,
			lastDeletedCity: null
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

	/* It's an arrow function to keep access to {this} without binding. */
	handleCityDeletion = name => {
		this.setState({ lastDeletedCity: name });
	}

	/* It's an arrow function to keep access to {this} without binding. */
	addCity = name => {
		const { cities } = this.state;
		cities.push({ name: name });

		this.setState({ cities: cities, lastDeletedCity: null });
	}

	/*********************************
	 * React functions
	 *********************************/

	componentDidMount() {
		const { uid } = this.props;

		Cities.getOf(uid)
			.then(response => {
				if (response.error) {
					this.setState({ error: response.error });
				} else {
					this.setState({ cities: response, isLoaded: true });
				}
			})
			.catch(err => this.setState({ error: err }));
	}

	renderData() {
		const { uid } = this.props;
		const { cities, error } = this.state;

		return (
			<React.Fragment>
				{
					error ? (
						<p className="cw-error">Une erreur est survenue: <span>{error}</span></p>
					) : (
						<React.Fragment>
							{
								cities.length > 0 ? (
									<React.Fragment>
										{
											cities.map((city, index) => {
												return <SimpleCity
													key={index}
													uid={uid}
													name={city.name}
													onClick={this.handleCityClick}
													onDelete={this.handleCityDeletion}
												/>;
											})
										}
									</React.Fragment>
								) : null
							}
							<AddSimpleCity uid={uid} onCityAdd={this.addCity}/>
						</React.Fragment>
					)
				}
			</React.Fragment>
		);
	}

	render() {
		const { isLoaded, lastDeletedCity } = this.state;

		return (
			<div className="sky">
				<div className="cities-wrapper custom-scrollbars">
					{ isLoaded ? this.renderData() : <div className="loading"><span className="loader"/></div> }
				</div>

				<div className="city-detail custom-scrollbars">
					<DetailedCity onRef={ ref => this.detailedCity = ref } lastDeletedCity={lastDeletedCity}/>
				</div>
			</div>
		);
	}
}

Index.propTypes = {
	uid: PropTypes.string,
};

export default withAuth(Index);