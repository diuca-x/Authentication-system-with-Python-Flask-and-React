import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";



export const Navbar = () => {
	const { store, actions } = useContext(Context);

	if(store.isloged){
		return (
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0 h1" onClick={() => {actions.isloged()}}>My page</span>
					</Link>
					<div className="ms-auto">
						<Link to="/">
							<button className="btn btn-primary" onClick={() => {actions.logoutinator()}}>Logout</button>
						</Link>
					</div>
				</div>
			</nav>
		);
	} else {
		return (
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">My page</span>
					</Link>
					<div className="ms-auto">
						<Link to="/login">
							<button className="btn btn-primary">Login</button>
						</Link>
						<Link to="/signup">
							<button className="btn btn-primary ms-4">Join us!</button>
						</Link>
					</div>
				</div>
			</nav>
		);
	}
	
};
