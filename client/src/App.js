import React from "react";

// Importing reacter router dom
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing the Pages
import Home from "./pages/Home/Home"
import Menu from "./pages/Menu/Menu"
import Contact from "./pages/Contact/Contact"

// Importing the Application Navigation Bar
import AppNav from "./components/AppNav/AppNav"


function App() {
	return (
		<BrowserRouter>
			<div>
				<AppNav />

				<Switch>

					<Route path="/menu">
						<Menu />
					</Route>

					<Route path="/contact">
						<Contact />
					</Route>

					<Route path="/">
						<Home />
					</Route>

				</Switch>

			</div>
		</BrowserRouter>
	);
}

export default App;
