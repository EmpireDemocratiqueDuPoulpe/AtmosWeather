import PropTypes from "prop-types";

const Visibility = (props) => {
	let content = props.inMeters ? `${props.inMeters}m` : `${props.inKilometers}km`;

	if (props.toKilometersAt) {
		if (props.inMeters > props.toKilometersAt) {
			content = `${props.inMeters / 1000}km`;
		}
	}

	return (<span className="visibility">Visibilit&eacute;: {content}</span>);
};

const propValidator = (props, propName, componentName) => {
	if (!props.inMeters && !props.inKilometers) {
		return new Error(`One of "inMeters" or "inKilometers" is required by "${componentName}" component.`);
	}

	if (props.inMeters) {
		PropTypes.checkPropTypes(
			{ inMeters: PropTypes.number },
			{ inMeters: props.inMeters},
			"prop",
			"Visibility"
		);
	}

	if (props.inKilometers) {
		PropTypes.checkPropTypes(
			{ inKilometers: PropTypes.number },
			{ inKilometers: props.inKilometers},
			"prop",
			"Visibility"
		);
	}
};

Visibility.propTypes = {
	inMeters: propValidator,
	inKilometers: propValidator,
	toKilometersAt: PropTypes.number
};

export default Visibility;