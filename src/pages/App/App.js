import React from "react";
import { Router, Route } from "react-router";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";
import Themes from "../../components/Themes/Themes.js";
import GlobalStyles from "../../components/Themes/GlobalStyles/GlobalStyles.js";
import useThemes from "../../components/Themes/useThemes.js";
import ThemeSwitcher from "../../components/Themes/ThemeSwitcher/ThemeSwitcher.js";
import useToken from "../../components/Auth/useToken.js";
import Index from "../Index/Index.js";
import Register from "../Register/Register.js";
import LogIn from "../LogIn/LogIn.js";
import LogOut from "../LogOut/LogOut.js";
import "./App.css";

const browserHistory = createBrowserHistory();

// TODO: Fix <Redirect/> bug
export default function App() {
	const [ theme, toggleTheme, ready ] = useThemes();
	const currentTheme = (theme === "light" ? Themes.light : Themes.dark);
	const { token } = useToken();

	if (!ready) return <div/>;

	return (
		<Router history={browserHistory}>
			<ThemeProvider theme={currentTheme}>
				<GlobalStyles/>

				<main className="App">
					<header className="App-header">
						<ThemeSwitcher onClick={toggleTheme}/>
						{token && (<Link to="/logout">Se d&eacute;connecter</Link>)}
					</header>

					<div className="App-body">
						<Route exact path={["/", "//", "/index"]} component={Index}/>
						<Route path="/register" component={Register}/>
						<Route path="/login" component={LogIn}/>
						<Route path="/logout" component={LogOut}/>
					</div>
				</main>
			</ThemeProvider>
		</Router>
	);
}