import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({ login }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark app-bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand mx-auto" to="/">
                    Dark Moon Security
                </Link>

                <div className="navbar-nav mx-auto">
                    <NavLink className={({ isActive }) => isActive ? "border-bottom border-3 border-danger text-white mx-2 text-decoration-none" : "text-white mx-2 text-decoration-none"} to="/">IdentityServer Admin</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "border-bottom border-3 border-danger text-white mx-2 text-decoration-none" : "text-white mx-2 text-decoration-none"} to='/security-token-service'>IdentityServer</NavLink>
                </div>

                <div className="navbar-nav mx-auto">
                    <Link className="btn text-white" to="/">
                        Help
                    </Link>
                    <Link className="btn text-secondary" to="/" onClick={() => login()}>
                        Sign out
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
