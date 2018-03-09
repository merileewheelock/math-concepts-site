import React, { Component } from 'react';

class Subject extends Component {
	render(){
		return(
			<div className="row">
				<div className="subject offset-sm-1 col-sm-4 col-xs-12 text-center">Algebra 1</div>
				<div className="subject offset-sm-2 col-sm-4 col-xs-12 text-center">Geometry</div>
				<div className="subject offset-sm-1 col-sm-4 col-xs-12 text-center">Algebra 2</div>
				<div className="subject offset-sm-2 col-sm-4 col-xs-12 text-center">Precalculus & Calculus</div>
			</div>
		)
	}
}

export default Subject;