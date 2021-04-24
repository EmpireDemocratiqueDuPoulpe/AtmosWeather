import "./App.css";
import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";
import Themes from "../../components/Themes/Themes.js";
import GlobalStyles from "../../components/Themes/GlobalStyles/GlobalStyles.js";
import useThemes from "../../components/Themes/useThemes.js";
import ThemeSwitcher from "../../components/Themes/ThemeSwitcher/ThemeSwitcher.js";
import Index from "../Index/Index.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";

const browserHistory = createBrowserHistory();

// TODO: Fix <Redirect/> bug
export default function App() {
	const [ theme, toggleTheme, ready ] = useThemes();
	const currentTheme = (theme === "light" ? Themes.light : Themes.dark);

	if (!ready) return <div/>;

	return (
		<Router history={browserHistory}>
			<ThemeProvider theme={currentTheme}>
				<GlobalStyles/>

				<main className="App">
					<header className="App-header">
						<ThemeSwitcher onClick={toggleTheme}/>
					</header>

					<div className="App-body">
						<Route exact path={["/", "//", "/index"]} component={Index}/>
						<Route path="/register" component={Register}/>
						<Route path="/login" component={Login}/>
					</div>
				</main>
			</ThemeProvider>
		</Router>
	);
}