import React, { Component } from 'react';
import Navbar from './containers/Navbar';
import Subjects from './components/Subjects';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <h1 className="header-main text-center">Math Concepts</h1>
                    <Subjects />
                </div>
            </div>
        );
    }
}

export default App;
