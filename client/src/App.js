import React from "react";

// Importing reacter router dom
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing the Pages
import Home from "./pages/Home/Home"
import Menu from "./pages/Menu/Menu"
import Contact from "./pages/Contact/Contact"
import Order from "./pages/Order/Order"

// Importing the Application Navigation Bar
import AppNav from "./components/AppNav/AppNav"


function App() {
	return (
		<BrowserRouter>
			<div>
				{/* The permanent sticky navigation bar */}
				<AppNav />
				{/* Router switch  */}
				<Switch>
					{/* When the /menu route is hit, visit the menu page */}
					<Route path="/menu">
						<Menu />
					</Route>
					{/* When the /contact route is hit, visit the contact page */}
					<Route path="/contact">
						<Contact />
					</Route>
					{/* When the /order route is hit, visit the contact page */}
					<Route path="/order">
						<Order />
					</Route>
					{/* When the /home route is hit, visit the home page */}
					<Route path="/">
						<Home />
					</Route>
				</Switch>

			</div>
		</BrowserRouter>
	);
}

export default App;
