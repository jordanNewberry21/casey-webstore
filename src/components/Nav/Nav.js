import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Nav.css';
import LogOutButton from '../LogOutButton/LogOutButton';
import Total from './total';

export default function Nav() {
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);
    return (
        <div className="nav">
            <h2 className="nav-title">Creations by Casey</h2>
            <div className="nav-right">
                <Link className="nav-link" to="/checkout">
                    Checkout ({cart.length}) <Total cart={cart} />
                </Link>
                <Link className="nav-link" to="/about">
                    About
                </Link>
                <Link className="nav-link" to="/register">
                    Register
                </Link>
                <Link className="nav-link" to="/login">
                    Login
                </Link>
                {
                    user.id ?
                    <LogOutButton className="nav-link" />  :
                    "" 
                }
            </div>
        </div>
    )
}
