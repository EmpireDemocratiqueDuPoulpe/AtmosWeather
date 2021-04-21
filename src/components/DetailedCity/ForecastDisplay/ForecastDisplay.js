import React from "react";
import PropTypes from "prop-types";
import "./ForecastDisplay.css";

export default class ForecastDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentDate: 0,
			currentTime: 0
		};
	}

	/*********************************
	 * Events
	 *********************************/

	/* It's an arrow function to keep access to {this} without binding. */
	toPreviousDate = () => {
		const  { currentDate } = this.state;
		const previousDate = Math.max(currentDate - 1, 0);

		if (currentDate !== previousDate) {
			this.setState({ currentDate: previousDate });
		}
	}

	/* It's an arrow function to keep access to {this} without binding. */
	toNextDate = () => {
		const { forecasts } = this.props;
		const  { currentDate } = this.state;
		const nextDate = Math.min(currentDate + 1, forecasts.length - 1);

		if (currentDate !== nextDate) {
			this.setState({ currentDate: nextDate });
		}
	}

	/*********************************
	 * React functions
	 *********************************/

	render() {
		const { forecasts } = this.props;
		const  { currentDate } = this.state;
		const currentForecasts = forecasts[currentDate];

		// TODO: Add time changer and display information for selected city, date and time.
		return (
			<div className="forecast-display">
				<div className="fd-date-changer">
					<div className="fd-previous-date" onClick={this.toPreviousDate}/>

					<div className="fd-current-date">
						<span>{currentForecasts.date}</span>
					</div>

					<div className="fd-next-date" onClick={this.toNextDate}/>
				</div>
			</div>
		);
	}
}

ForecastDisplay.propTypes = {
	forecasts: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			data: PropTypes.arrayOf(
				PropTypes.shape({
					time: PropTypes.string.isRequired,
					forecast: PropTypes.object.isRequired
				})
			)
		})
	)
};