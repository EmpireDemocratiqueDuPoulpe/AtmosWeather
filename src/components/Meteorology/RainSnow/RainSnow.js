import PropTypes from "prop-types";

const RainSnow = (props) => (
	<div className="rain-snow">
		{
			props.rainLevel && (
				<div>
					<span>Pluie : {props.rainLevel}mm</span>
				</div>
			)
		}

		{
			props.snowLevel && (
				<div>
					<span>Neige : {props.snowLevel}mm</span>
				</div>
			)
		}
	</div>
);

RainSnow.propTypes = {
	rainLevel: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	snowLevel: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	])
};

export default RainSnow;