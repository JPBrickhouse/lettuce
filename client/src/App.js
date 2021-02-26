import React from "react";

// Importing reacter router dom
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing the Home Page
import Home from "./pages/Home/Home"

// Importing the Application Navigation Bar
import AppNav from "./components/AppNav/AppNav"


function App() {
	return (
		<BrowserRouter>
			<div>
				<AppNav />

				<Switch>

					<Route path="/">
						<Home />
					</Route>

				</Switch>

			</div>
		</BrowserRouter>
	);
}

export default App;
