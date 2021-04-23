import PropTypes from "prop-types";

const ThemeSwitcher = (props) => {
	return <button onClick={props.onClick}>ThemeSwitcher</button>;
};

ThemeSwitcher.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default ThemeSwitcher;