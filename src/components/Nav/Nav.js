import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return (
        <div className="nav">
            <h2 className="nav-title">Creations by Casey</h2>
            <div className="nav-right">
                <Link className="nav-link" to="/register">
                    Register
                </Link>
                <Link className="nav-link" to="/login">
                    Login
                </Link>
            </div>
        </div>
    )
}
