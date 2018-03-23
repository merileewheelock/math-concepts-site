import React, { Component } from 'react';

class Navbar extends Component{
	render(){
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<div className="navbar-brand">Home</div>
					</div>
					<div className="nav-subject">Algebra 1</div>
					<div className="nav-subject">Geometry</div>
					<div className="nav-subject">Algebra 2</div>
					<div className="nav-subject">Precalculus & Calculus</div>
				</div>
			</nav>
		)
	}
}

export default Navbar;