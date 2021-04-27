import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Nav.css';
import LogOutButton from '../LogOutButton/LogOutButton';
import Total from './total';

export default function Nav() {
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);

    let loginLinkData = {
        path: '/login',
        text: 'Login / Register',
    };
    
    if (user.admin === true) {
        loginLinkData.path = '/admin';
        loginLinkData.text = 'Add Item';
    }

    return (
        <div className="nav">
            <h2 className="nav-title">Creations by Casey</h2>
            <div className="nav-right">
                <Link className="nav-link" to="/checkout">
                    Checkout ({cart.length}) <Total cart={cart} />
                </Link>
                {
                    user.id ?
                    <LogOutButton className="nav-link" />  :
                    "" 
                }
                <Link className="nav-link" to="/about">
                    About
                </Link>
                {/* ternary operator, checks to see if user is admin, if not, the link to the 
                "Home" page, which is the Admin AddItemForm, won't render. */}
                {user.admin ? 
                <Link className="nav-link" to={loginLinkData.path}>{loginLinkData.text}</Link> :
                ''}
                {!user.id && (
                <>
                    <Link className="nav-link" to={loginLinkData.path}>{loginLinkData.text}</Link>
                </>
                )}
                <Link className="nav-link" to="/store">
                    Store
                </Link>
            </div>
        </div>
    )
}
