import PropTypes from "prop-types";
import "./RainSnow.css";

function RainSnow(props) {
	const { rainLevel, snowLevel, titleWidth } = props;

	return (
		<div className="rain-snow">
			{rainLevel && (
				<p className="rain">
					<span className="title" style={{ width: titleWidth }}>Pluie :</span> <span className="value">{rainLevel}mm</span>
				</p>
			)}

			{snowLevel && (
				<p className="rain">
					<span className="title" style={{ width: titleWidth }}>Neige :</span> <span className="value">{snowLevel}mm</span>
				</p>
			)}
		</div>
	);
}

RainSnow.propTypes = {
	rainLevel: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	snowLevel: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	titleWidth: PropTypes.string.isRequired
};

RainSnow.defaultProps = {
	titleWidth: "auto"
};

export default RainSnow;