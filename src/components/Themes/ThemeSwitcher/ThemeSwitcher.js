import PropTypes from "prop-types";
import "./ThemeSwitcher.css";

// This design is vastly inspired by the switch made by Benjamin Réthoré.
// See: https://codepen.io/bnthor/pen/WQBNxO
const ThemeSwitcher = (props) => (
	<div className={`theme-toggle ${props.showText ? "" : "no-text"}`}>
		<input id="tt-checkbox" className="tt-checkbox" type="checkbox" onChange={props.onClick} checked={props.currentTheme === "dark"}/>
		<label className="toggle" htmlFor="tt-checkbox">
			<span className="toggle-knob">
				<span className="crater crater--1"/>
				<span className="crater crater--2"/>
				<span className="crater crater--3"/>
			</span>

			<span className="star star--1"/>
			<span className="star star--2"/>
			<span className="star star--3"/>
			<span className="star star--4"/>
			<span className="star star--5"/>
			<span className="star star--6"/>
		</label>
	</div>
);

ThemeSwitcher.propTypes = {
	currentTheme: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	showText: PropTypes.bool
};

ThemeSwitcher.defaultProps = {
	showText: true
};

export default ThemeSwitcher;