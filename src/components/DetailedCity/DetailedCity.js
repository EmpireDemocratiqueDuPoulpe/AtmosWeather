import React from "react";
import PropTypes from "prop-types";
import "./DetailedCity.css";

export default class DetailedCity extends React.Component {
	constructor(props) {
		super(props);
	}

	/*********************************
	 * React functions
	 *********************************/

	render() {
		const { name } = this.props;

		return (
			<p>{name}</p>
		);
	}
}

DetailedCity.propTypes = {
	name: PropTypes.string.isRequired,
	weather: PropTypes.object
};