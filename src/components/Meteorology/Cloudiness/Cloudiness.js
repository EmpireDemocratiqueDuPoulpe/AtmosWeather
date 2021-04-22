import PropTypes from "prop-types";

const Cloudiness = (props) => (
	<span className="cloudiness">Couverture nuageuse : {props.value}&#37;</span>
);

Cloudiness.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired
};

export default Cloudiness;