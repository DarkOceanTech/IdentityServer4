import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavSide = () => {
    const isActiveCss = "border-bottom border-3 border-danger text-white mx-2 my-3 text-decoration-none";
    const notActiveCss = "text-white mx-2 my-3 text-decoration-none";
    const accordionSection = "ps-2";

    return (

        <div className='text-white d-flex h-100 align-items-stretch side-nav'>
            <nav className="d-flex flex-column align-items-start mx-2">
                <NavLink className={({ isActive }) => isActive ? isActiveCss : notActiveCss} to="/">Home</NavLink>
                <a className={notActiveCss} data-bs-toggle="collapse" role="button" href="#users">Users</a>
                <div className={`collapse ${accordionSection}`} id="users">
                    <NavLink className={({ isActive }) => isActive ? isActiveCss : notActiveCss} to="/active-users">Active Users</NavLink>
                 </div>
                <a className={notActiveCss} data-bs-toggle="collapse" role="button" href="#roles">Roles</a>
                <div className={`collapse ${accordionSection}`} id="roles">
                    <NavLink className={({ isActive }) => isActive ? isActiveCss : notActiveCss} to='/role-assignments'>Roles Assignments</NavLink>
                </div>
                <a className={notActiveCss} data-bs-toggle="collapse" role="button" href="#clients">Clients</a>
                <div className={`collapse ${accordionSection}`} id="clients">
                    <div className="d-flex flex-column">
                        <NavLink className={({ isActive }) => isActive ? isActiveCss : notActiveCss} to='/active-clients'>Active Clients</NavLink>
                        <NavLink className={({ isActive }) => isActive ? isActiveCss : notActiveCss} to='/persisted-grants'>Persisted Grants</NavLink>
                    </div>
                </div>
                <a className={notActiveCss} data-bs-toggle="collapse" role="button" href="#resources">Resources</a>
                <div className={`collapse ${accordionSection}`} id="resources">
                    <div className="d-flex flex-column">
                        <NavLink className={({ isActive }) => isActive ? isActiveCss : notActiveCss} to='/identity-resources'>Identity Resources</NavLink>
                        <NavLink className={({ isActive }) => isActive ? isActiveCss : notActiveCss} to='/api-resources'>Api Resources</NavLink>
                        <NavLink className={({ isActive }) => isActive ? isActiveCss : notActiveCss} to="/api-scopes">Api Scopes</NavLink>
                    </div>
                </div>
                <a className={notActiveCss} data-bs-toggle="collapse" role="button" href="#audit">Audit</a>
                <div className={`collapse ${accordionSection}`} id="audit">
                    <NavLink className={({ isActive }) => isActive ? isActiveCss : notActiveCss} to="/audit-logs">Audit Logs</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavSide;
