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
import AdminRoute from '../AdminRoute/AdminRoute';
import AdminHome from '../AdminHome/AdminHome';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
                    path="/store"
                    component={Inventory}
                />
                <ProtectedRoute
                    // with authRedirect:
                    // - if logged in, redirects to "/user"
                    // - if admin, redirect to "/admin"
                    // - else shows LoginPage at /login
                    exact
                    path="/login"
                    component={LoginPage}
                    authRedirect="/user"
                    adminRedirect="/admin"
                />
                <ProtectedRoute
                    // with authRedirect:
                    // - if logged in, redirects to "/user"
                    // - if admin, redirect to "/admin"
                    // - else shows RegisterPage at "/registration"
                    exact
                    path="/registration"
                    component={RegisterPage}
                    authRedirect="/user"
                    adminRedirect="/admin"
                />
                <AdminRoute
                    // AdminRoute ensures the user is an admin
                    // if not logged in, redirects to login
                    // if logged in but not admin, redirects to user homepage
                    exact
                    path="/admin"
                    component={AdminHome}
                />
                </Switch>
            </div>
            </Router>
        )
    }
}

export default connect()(App);
