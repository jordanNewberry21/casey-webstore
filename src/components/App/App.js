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
import UserPage from '../UserPage/UserPage';
import AboutPage from '../AboutPage/AboutPage';
import ItemDetails from '../ItemDetails/ItemDetails';
import Footer from '../Footer/Footer';

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
                <Route
                    exact
                    path="/details"
                    component={ItemDetails}
                />
                <Route
                    // shows AboutPage at all times (logged in or not)
                    exact
                    path="/about"
                    component={AboutPage}
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
                    path="/register"
                    component={RegisterPage}
                    authRedirect="/user"
                    adminRedirect="/admin"
                />
                <ProtectedRoute
                    // with authRedirect:
                    // - if logged in, redirects to "/user"
                    // - if admin, redirect to "/admin"
                    // - else shows RegisterPage at "/registration"
                    exact
                    path="/user"
                    component={UserPage}
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
                    authRedirect="/user"
                />
                </Switch>
                <Footer />
            </div>
            </Router>
        )
    }
}

export default connect()(App);
