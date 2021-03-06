import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './containers/Navbar';
import Subjects from './components/Subjects';
import Algebra1 from './containers/Algebra1';
import Geometry from './containers/Geometry';
import Algebra2 from './containers/Algebra2';
import Calculus from './containers/Calculus';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <Route exact path="/" component={Subjects} />
                        <Route exact path="/algebra1" component={Algebra1} />
                        <Route exact path="/geometry" component={Geometry} />
                        <Route exact path="/algebra2" component={Algebra2} />
                        <Route exact path="/calculus" component={Calculus} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
