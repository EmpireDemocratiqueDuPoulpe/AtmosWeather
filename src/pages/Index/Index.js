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
			error: null
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
	addCity = name => {
		const { cities } = this.state;
		cities.push({ name: name });

		this.setState({ cities: cities });
	}

	/*********************************
	 * React functions
	 *********************************/

	componentDidMount() {
		const { uid } = this.props;

		Cities.getOf(uid)
			.then(json => this.setState({ cities: json, isLoaded: true }))
			.catch(err => this.setState({ error: err }));
	}

	// TODO: Better loading (gif, animation)
	renderLoading() {
		return (
			<React.Fragment>
				<p>Chargement en cours...</p>
			</React.Fragment>
		);
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
												return <SimpleCity key={index} uid={uid} name={city.name} onClick={this.handleCityClick}/>;
											})
										}
									</React.Fragment>
								) : (
									<p>Aucune ville trouv&eacute;e</p>
								)
							}
							<AddSimpleCity uid={uid} onCityAdd={this.addCity}/>
						</React.Fragment>
					)
				}
			</React.Fragment>
		);
	}

	render() {
		const { isLoaded } = this.state;

		return (
			<div className="sky">
				<div className="cities-wrapper custom-scrollbars">
					{ isLoaded ? this.renderData() : this.renderLoading() }
				</div>

				<div className="city-detail custom-scrollbars">
					<DetailedCity onRef={ ref => this.detailedCity = ref }/>
				</div>
			</div>
		);
	}
}

Index.propTypes = {
	uid: PropTypes.string,
};

export default withAuth(Index);