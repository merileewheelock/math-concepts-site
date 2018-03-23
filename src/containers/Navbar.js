import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component{
	render(){
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<div className="navbar-brand"><Link to="/">Home</Link></div>
					</div>
					<div className="nav-subject"><Link to="/algebra">Algebra 1</Link></div>
					<div className="nav-subject"><Link to="/geometry">Geometry</Link></div>
					<div className="nav-subject"><Link to="/algebra2">Algebra 2</Link></div>
					<div className="nav-subject"><Link to="/calculus">Precalculus & Calculus</Link></div>
				</div>
			</nav>
		)
	}
}

export default Navbar;