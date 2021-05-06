import PropTypes from "prop-types";
import LogoBlack from "../../assets/images/logo_black.png";
import LogoBlackSmall from "../../assets/images/logo_black_small.png";
import LogoWhite from "../../assets/images/logo_white.png";
import LogoWhiteSmall from "../../assets/images/logo_white_small.png";
import "./AppLogo.css";

const LOGOS = {
	small: {
		light: LogoWhiteSmall,
		dark: LogoBlackSmall
	},
	normal: {
		light: LogoWhite,
		dark: LogoBlack
	}
};

function AppLogo(props) {
	const { theme, always, small } = props;
	const logo = LOGOS[small ? "small" : "normal"][always ?? theme];

	return (
		<div className={`App-logo ${props.small ? "small" : ""}`}>
			<img src={logo} alt="App logo"/>
		</div>
	);
}

AppLogo.propTypes = {
	theme: PropTypes.string.isRequired,
	always: PropTypes.oneOf([ "light", "dark" ]),
	small: PropTypes.bool
};

AppLogo.defaultProps = {
	small: false
};

export default AppLogo;