import React from "react";
import PropTypes from "prop-types";
import withAuth from "../../components/Auth/withAuth.js";
import SimpleCity from "../../components/SimpleCity/SimpleCity";
import DetailedCity from "../../components/DetailedCity/DetailedCity";
import "./Index.css";
import config from "../../config/config";

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

	/*********************************
	 * React functions
	 *********************************/

	componentDidMount() {
		const { uid } = this.props;
		const { awApi } = config;
		const options = { headers: { Accept: "application/json" } };

		fetch(`${awApi.cities.getOf}/${uid}`, options)
			.then(response => response.json())
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
												return <SimpleCity key={index} name={city.name} onClick={this.handleCityClick}/>;
											})
										}
									</React.Fragment>
								) : (
									<p>Aucune ville trouv&eacute;e</p>
								)
							}
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
				<div className="cities-wrapper">
					{ isLoaded ? this.renderData() : this.renderLoading() }
				</div>

				<div className="city-detail">
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