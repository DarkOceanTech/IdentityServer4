import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({ logout }) => {
    const isActiveCss = "border-bottom border-3 border-danger text-white mx-2 text-decoration-none";
    const notActiveCss = "text-white mx-2 text-decoration-none";
    return (
        <nav className="navbar navbar-expand-lg navbar-dark app-bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand ms-3" to="/">
                    Dark Moon Security
                </Link>

                <div className="navbar-nav me-3">
                    <Link className="btn text-white" to="/">
                        Help
                    </Link>
                    <Link className="btn text-secondary" to="/" onClick={() => logout()}>
                        Sign out
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
