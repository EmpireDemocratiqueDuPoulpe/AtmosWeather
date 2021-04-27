import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Themes from "../../components/Themes/Themes.js";
import GlobalStyles from "../../components/Themes/GlobalStyles/GlobalStyles.js";
import useThemes from "../../components/Themes/useThemes.js";
import ThemeSwitcher from "../../components/Themes/ThemeSwitcher/ThemeSwitcher.js";
import useToken from "../../components/Auth/useToken.js";
import useUID from "../../components/Auth/useUID.js";
import Index from "../Index/Index.js";
import Register from "../Register/Register.js";
import LogIn from "../LogIn/LogIn.js";
import LogOut from "../LogOut/LogOut.js";
import Errors from "../Errors/Errors.js";
import "./App.css";

export default function App() {
	const [ theme, toggleTheme, ready ] = useThemes();
	const currentTheme = (theme === "light" ? Themes.light : Themes.dark);
	const { token } = useToken();
	const { uid } = useUID();

	if (!ready) return <div/>;

	return (
		<Router>
			<ThemeProvider theme={currentTheme}>
				<GlobalStyles/>

				<main className="App">
					<header className="App-header">
						<ThemeSwitcher onClick={toggleTheme}/>
						{token && (<Link to="/logout">Se d&eacute;connecter</Link>)}
					</header>

					<div className="App-body">
						<Switch>
							<Route exact path={["/", "//", "/index"]}>
								<Index uid={uid}/>
							</Route>
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