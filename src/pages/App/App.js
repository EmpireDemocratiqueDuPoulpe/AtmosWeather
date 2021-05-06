import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Themes from "../../components/Themes/Themes.js";
import GlobalStyles from "../../components/Themes/GlobalStyles/GlobalStyles.js";
import useThemes from "../../components/Themes/useThemes.js";
import ThemeSwitcher from "../../components/Themes/ThemeSwitcher/ThemeSwitcher.js";
import AppLogo from "../../components/AppLogo/AppLogo.js";
import UserDisplay from "../../components/Auth/UserDisplay/UserDisplay.js";
import Index from "../Index/Index.js";
import Register from "../Register/Register.js";
import LogIn from "../LogIn/LogIn.js";
import LogOut from "../LogOut/LogOut.js";
import Errors from "../Errors/Errors.js";
import "../../assets/css/weather-icons.min.css";
import "./App.css";

export default function App() {
	const [ theme, toggleTheme, ready ] = useThemes();
	const currentTheme = (theme === "light" ? Themes.light : Themes.dark);

	if (!ready) return <div/>;

	return (
		<Router>
			<ThemeProvider theme={currentTheme}>
				<GlobalStyles/>

				<main className="App">
					<header className="App-header">
						<div className="App-header-section left">
							<ThemeSwitcher currentTheme={theme} onClick={toggleTheme} showText={false}/>
						</div>
						<div className="App-header-section center">
							<AppLogo theme={theme} always="light"/>
						</div>
						<div className="App-header-section right">
							<UserDisplay/>
						</div>
					</header>

					<div className="App-body">
						<Switch>
							<Route exact path={["/", "//", "/index"]} component={Index}/>
							<Route path="/register" component={Register}/>
							<Route path="/login" component={LogIn}/>
							<Route path="/logout" component={LogOut}/>
							<Route component={Errors.NotFound}/>
						</Switch>
					</div>
				</main>
			</ThemeProvider>
		</Router>
	);
}