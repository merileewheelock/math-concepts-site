import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Subject extends Component {
	render(){
		return(
			<div className="row">
				<div className="col-md-4 offset-md-1 col-sm-10 offset-sm-1">
					<Link to="/algebra">
						<div className="subject text-center">
							Algebra 1
						</div>
					</Link>
				</div>
				<div className="col-md-4 offset-md-2 col-sm-10 offset-sm-1">
					<Link to="/geometry">
						<div className="subject text-center">
							Geometry
						</div>
					</Link>
				</div>
				<div className="col-md-4 offset-md-1 col-sm-10 offset-sm-1">
					<Link to="/algebra2">
						<div className="subject text-center">
							Algebra 2
						</div>
					</Link>
				</div>
				<div className="col-md-4 offset-md-2 col-sm-10 offset-sm-1">
					<Link to="/calculus">
						<div className="subject text-center">
							(Pre)Calculus
						</div>
					</Link>
				</div>
			</div>
		)
	}
}

export default Subject;