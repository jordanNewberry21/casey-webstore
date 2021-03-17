import React, { Component } from 'react';
import { 
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

// components
import Nav from '../Nav/Nav';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Inventory from '../Inventory/Inventory';

class App extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER' });
    }

    render() {
        return (
            <Router>
            <div>
                <Nav />
                <Switch>
                {/* Visiting localhost:3000 will redirect to localhost:3000/store */}
                <Redirect exact from="/" to="/store" />
                <Route
                    exact
                    path="/register"
                    component={RegisterPage}
                 />
                 <Route
                    exact
                    path="/login"
                    component={LoginPage}
                 />
                 <Route
                    exact
                    path="/store"
                    component={Inventory}
                />
                </Switch>
            </div>
            </Router>
        )
    }
}

export default connect()(App);
