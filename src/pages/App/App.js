import "./App.css";
import React from "react";
import {Route, Router} from "react-router";
import { createBrowserHistory } from "history";
import Index from "../Index/Index.js";

const browserHistory = createBrowserHistory();

export default function App() {
	return (
		<Router history={browserHistory}>
			<main className="App">
				<header className="App-header"> </header>

				<div className="App-body">
					<Route exact path="/" component={Index}/>
				</div>
			</main>
		</Router>
	);
}