import PropTypes from "prop-types";
import "./Visibility.css";

function Visibility(props) {
	const { inMeters, inKilometers, toKilometersAt, titleWidth } = props;
	let value = inMeters ? `${inMeters}m` : `${inKilometers}km`;

	if (inMeters && toKilometersAt) {
		if (inMeters > toKilometersAt) {
			value = `${inMeters / 1000}km`;
		}
	}

	return (
		<p className="visibility">
			<span className="title" style={{ width: titleWidth }}>Visibilit&eacute; :</span> <span className="value">{value}</span>
		</p>
	);
}

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
	toKilometersAt: PropTypes.number,
	titleWidth: PropTypes.string.isRequired
};

Visibility.defaultProps = {
	titleWidth: "auto"
};

export default Visibility;